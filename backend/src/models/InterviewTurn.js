import mongoose from "mongoose";

// One question ↔ answer exchange within a session.
const interviewTurnSchema = new mongoose.Schema(
  {
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
      index: true,
    },
    order: { type: Number, required: true }, // 1-based position in the interview
    question: { type: String, required: true },
    isFollowUp: { type: Boolean, default: false },

    // Filled once the candidate answers.
    answerTranscript: { type: String, default: null },
    evaluationNotes: { type: String, default: null }, // per-answer notes from the LLM
    answeredAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const InterviewTurn = mongoose.model("InterviewTurn", interviewTurnSchema);
