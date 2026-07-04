import mongoose from "mongoose";

const freelancerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },

    // Personal Information
    avatar: { type: String, default: null }, // /uploads/... path
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    languages: { type: [String], default: [] },

    // Professional Information
    jobTitle: { type: String, required: true, trim: true },
    experienceLevel: { type: String, trim: true },
    availability: { type: String, trim: true },
    hourlyRate: { type: String, trim: true },
    skills: { type: [String], required: true, default: [] },

    // About
    about: { type: String, maxlength: 1000 },

    // Portfolio & Social Links
    portfolio: {
      website: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      behance: { type: String, trim: true },
      github: { type: String, trim: true },
      dribbble: { type: String, trim: true },
      instagram: { type: String, trim: true },
    },

    // Resume
    resume: { type: String, default: null }, // /uploads/... path
  },
  { timestamps: true }
);

export const FreelancerProfile = mongoose.model("FreelancerProfile", freelancerProfileSchema);
