import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const MODEL = "gpt-4o-mini";

// The interviewer's personality / rubric.
const SYSTEM_PROMPT = `You are a warm, encouraging English-speaking interview coach running a SPOKEN English interview.
Important guidance:
- The candidate may have BASIC-TO-INTERMEDIATE English skills. Be supportive and put them at ease.
- Do NOT heavily penalize minor grammar mistakes. Prioritize FLUENCY, CONFIDENCE, and RELEVANCE over perfect grammar.
- Ask SIMPLE, CLEAR questions first, then gradually increase difficulty.
- Ask ONE short, conversational question at a time. Never ask multiple questions in one turn.
- Keep your language easy to understand.`;

// Retry OpenAI calls a couple times on transient failures.
async function withRetry(fn, tries = 2) {
  let lastErr;
  for (let i = 0; i <= tries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < tries) await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
  throw lastErr;
}

function historyToText(history) {
  return history
    .map((t, i) => `Q${i + 1}: ${t.question}\nA${i + 1}: ${t.answer ? t.answer : "(no answer given)"}`)
    .join("\n\n");
}

// Generate the opening question of the interview.
export async function generateFirstQuestion({ role = "general", difficulty = "easy" }) {
  const res = await withRetry(() =>
    client.chat.completions.create({
      model: MODEL,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Begin a spoken English interview for the role "${role}" at ${difficulty} difficulty.
Ask a single simple, friendly opening question.
Return ONLY JSON: { "question": string }`,
        },
      ],
    })
  );
  return JSON.parse(res.choices[0].message.content).question;
}

// Evaluate the latest answer and produce the next question (or end the interview).
export async function evaluateAndNext({ role, difficulty, history, questionsAsked, maxQuestions }) {
  const res = await withRetry(() =>
    client.chat.completions.create({
      model: MODEL,
      temperature: 0.6,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Role: "${role}". Difficulty: ${difficulty}. Questions asked so far: ${questionsAsked}/${maxQuestions}.

Conversation so far:
${historyToText(history)}

Tasks:
1. Briefly evaluate the candidate's MOST RECENT answer (fluency, confidence, relevance; be encouraging).
2. Decide the next step: ask a short follow-up if it helps, otherwise a new question that is slightly harder.
3. If questions asked >= ${maxQuestions}, set "interviewComplete" to true and make "nextQuestion" a short, warm closing line.

Return ONLY JSON exactly in this shape:
{ "nextQuestion": string, "isFollowUp": boolean, "evaluationNotes": string, "interviewComplete": boolean }`,
        },
      ],
    })
  );
  return JSON.parse(res.choices[0].message.content);
}

// Produce the final scored report from the whole transcript.
export async function generateFinalReport({ role, history }) {
  const res = await withRetry(() =>
    client.chat.completions.create({
      model: MODEL,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `The spoken English interview for role "${role}" is complete. Produce a final evaluation.
Score each dimension from 0 to 100. Be encouraging but honest. Weight fluency/confidence/relevance more than perfect grammar.

Full transcript:
${historyToText(history)}

Return ONLY JSON exactly in this shape:
{ "scores": { "grammar": number, "fluency": number, "vocabulary": number, "confidence": number, "relevance": number, "overall": number }, "feedback": string }`,
        },
      ],
    })
  );
  return JSON.parse(res.choices[0].message.content);
}
