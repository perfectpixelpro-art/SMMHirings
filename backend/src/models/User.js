import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // bcrypt HASH only — never the raw password. select:false hides it by default.
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["freelancer", "business"],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    // Set true once the user fills out their role-specific profile.
    profileCompleted: { type: Boolean, default: false },
    // Admin review state of the application.
    applicationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    // If rejected, the user is locked out until this date (6 months).
    rejectedUntil: { type: Date, default: null },
    // bcrypt hash of the current refresh token (single active session). select:false.
    refreshTokenHash: { type: String, default: null, select: false },
  },
  { timestamps: true }
);

// Clean JSON shape: id instead of _id, never leak secrets.
userSchema.set("toJSON", {
  transform(_doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
    delete ret.refreshTokenHash;
    return ret;
  },
});

export const User = mongoose.model("User", userSchema);
