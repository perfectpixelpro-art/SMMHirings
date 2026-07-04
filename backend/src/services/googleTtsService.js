// Google Cloud Text-to-Speech via the REST API using a plain API key
// (no service-account client library — that's blocked by the org policy).

const ENDPOINT = "https://texttospeech.googleapis.com/v1/text:synthesize";

/**
 * Convert text to speech. Returns base64-encoded MP3 audio (audioContent).
 * The frontend can play it via `data:audio/mp3;base64,<...>`.
 */
export async function synthesizeSpeech(text, opts = {}) {
  const key = (process.env.GOOGLE_TTS_API_KEY || "").trim();
  if (!key) throw new Error("GOOGLE_TTS_API_KEY is not set");
  if (!text || !text.trim()) throw new Error("No text provided for TTS");

  const {
    languageCode = "en-US",
    voice = "en-US-Neural2-C", // Neural2 voice (falls back well; WaveNet also fine)
    speakingRate = 1.0,
  } = opts;

  const res = await fetch(`${ENDPOINT}?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode, name: voice },
      audioConfig: { audioEncoding: "MP3", speakingRate },
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Google TTS failed (${res.status}): ${detail.slice(0, 300)}`);
  }

  const data = await res.json();
  if (!data.audioContent) throw new Error("Google TTS returned no audioContent");
  return data.audioContent; // base64 MP3
}
