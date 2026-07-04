import mongoose from "mongoose";

const finalReportSchema = new mongoose.Schema(
  {
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
      unique: true,
      index: true,
    },
    // 0–100 scores for each dimension of spoken-English communication.
    scores: {
      grammar: { type: Number, default: 0 },
      fluency: { type: Number, default: 0 },
      vocabulary: { type: Number, default: 0 },
      confidence: { type: Number, default: 0 },
      relevance: { type: Number, default: 0 },
      overall: { type: Number, default: 0 },
    },
    feedback: { type: String, default: "" }, // written summary for candidate/recruiter
  },
  { timestamps: true }
);

export const FinalReport = mongoose.model("FinalReport", finalReportSchema);
