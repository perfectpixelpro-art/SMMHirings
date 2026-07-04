import mongoose from "mongoose";

const interviewSessionSchema = new mongoose.Schema(
  {
    // Optional link to a logged-in candidate.
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    candidateName: { type: String, trim: true },
    role: { type: String, required: true, trim: true }, // job title being interviewed for
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },

    status: {
      type: String,
      enum: ["in_progress", "completed", "aborted"],
      default: "in_progress",
    },
    maxQuestions: { type: Number, default: 5 },
    questionsAsked: { type: Number, default: 0 },

    startedAt: { type: Date, default: Date.now },
    completedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const InterviewSession = mongoose.model("InterviewSession", interviewSessionSchema);
