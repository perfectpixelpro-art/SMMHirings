import WebSocket from "ws";

const DG_URL = "wss://api.deepgram.com/v1/listen";

/**
 * Opens a streaming connection to Deepgram. Audio chunks (browser webm/opus)
 * are forwarded with sendAudio(); transcripts arrive via onTranscript(text, isFinal).
 * The DEEPGRAM_API_KEY stays server-side.
 *
 * Returns { sendAudio, finish } and calls the provided callbacks.
 */
export function openDeepgramSocket({ onTranscript, onError, onClose } = {}) {
  const key = (process.env.DEEPGRAM_API_KEY || "").trim();
  if (!key) throw new Error("DEEPGRAM_API_KEY is not set");

  const params = new URLSearchParams({
    model: "nova-2",
    language: "en-US",
    smart_format: "true",
    interim_results: "true",
    punctuate: "true",
    endpointing: "300",
  });

  const dg = new WebSocket(`${DG_URL}?${params.toString()}`, {
    headers: { Authorization: `Token ${key}` },
  });

  let ready = false;
  const queue = []; // audio buffered until the socket opens

  dg.on("open", () => {
    ready = true;
    for (const chunk of queue) dg.send(chunk);
    queue.length = 0;
  });

  dg.on("message", (raw) => {
    try {
      const msg = JSON.parse(raw.toString());
      if (msg.type === "Results") {
        const text = msg.channel?.alternatives?.[0]?.transcript || "";
        if (text) onTranscript?.(text, !!msg.is_final);
      }
    } catch {
      /* ignore non-JSON keepalives */
    }
  });

  dg.on("error", (err) => onError?.(err));
  dg.on("close", () => onClose?.());

  return {
    sendAudio(chunk) {
      if (ready && dg.readyState === WebSocket.OPEN) dg.send(chunk);
      else queue.push(chunk);
    },
    finish() {
      try {
        // Tell Deepgram to flush + finalize, then close shortly after.
        if (dg.readyState === WebSocket.OPEN) dg.send(JSON.stringify({ type: "CloseStream" }));
      } catch {
        /* noop */
      }
      setTimeout(() => {
        try { dg.close(); } catch { /* noop */ }
      }, 400);
    },
  };
}
