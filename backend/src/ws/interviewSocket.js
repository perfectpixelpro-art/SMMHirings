import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { openDeepgramSocket } from "../services/deepgramService.js";

/**
 * Attaches the interview WebSocket server at /ws/interview.
 *
 * Client → server messages:
 *   JSON  { type: "start", sessionId }   begin capturing an answer
 *   binary audio chunks                   streamed to Deepgram
 *   JSON  { type: "stop" }                 stop, finalize transcript, advance
 *
 * Server → client messages:
 *   { type: "ready" }
 *   { type: "transcript", text, isFinal }         live captions
 *   { type: "final_transcript", transcript }
 *   { type: "next", interviewComplete, question?, closing?, isFollowUp?, audioContent }
 *   { type: "no_speech" } | { type: "error", code|message }
 */
export function attachInterviewSocket(server) {
  const wss = new WebSocketServer({ server, path: "/ws/interview" });

  wss.on("connection", (client, request) => {
    // Auth: browser WebSockets can't set headers, so the access token comes as ?token=
    try {
      const url = new URL(request.url, "http://localhost");
      const payload = jwt.verify(url.searchParams.get("token") || "", process.env.JWT_ACCESS_SECRET);
      client._userId = payload.sub;
    } catch {
      client.close(4001, "unauthorized");
      return;
    }

    let dg = null;
    let sessionId = null;
    let finalTranscript = "";

    const send = (obj) => {
      if (client.readyState === client.OPEN) client.send(JSON.stringify(obj));
    };

    client.on("message", async (data, isBinary) => {
      // Binary frames are raw audio → forward to Deepgram.
      if (isBinary) {
        if (dg) dg.sendAudio(data);
        return;
      }

      let msg;
      try {
        msg = JSON.parse(data.toString());
      } catch {
        return;
      }

      if (msg.type === "start") {
        sessionId = msg.sessionId;
        finalTranscript = "";
        try {
          dg = openDeepgramSocket({
            onTranscript: (text, isFinal) => {
              send({ type: "transcript", text, isFinal });
              if (isFinal) finalTranscript += (finalTranscript ? " " : "") + text;
            },
            onError: () => send({ type: "error", message: "Speech service error" }),
          });
          send({ type: "ready" });
        } catch (err) {
          console.error("[ws] deepgram open failed:", err.message);
          send({ type: "error", message: "Could not start speech recognition" });
        }
      } else if (msg.type === "stop") {
        // The socket only transcribes. Advancing the interview happens via the
        // REST /answer endpoint after the candidate reviews & submits — so they
        // can re-record if they want.
        if (dg) dg.finish();
        dg = null;
        setTimeout(() => {
          const transcript = finalTranscript.trim();
          if (!transcript) return send({ type: "no_speech" });
          send({ type: "final_transcript", transcript });
        }, 800);
      }
    });

    client.on("close", () => {
      if (dg) dg.finish();
      dg = null;
    });
  });

  console.log("[ws] interview socket listening on /ws/interview");
}
