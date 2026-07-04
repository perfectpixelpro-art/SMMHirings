import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },

    // Company Information
    companyName: { type: String, required: true, trim: true },
    logo: { type: String, default: null }, // /uploads/... path
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    accountEmail: { type: String, trim: true, lowercase: true },
    companyEmail: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    website: { type: String, trim: true },

    // Company Address
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    zipCode: { type: String, trim: true },

    // Business Details
    industry: { type: String, trim: true },
    companySize: { type: String, trim: true },
    about: { type: String, maxlength: 500 },
    social: {
      linkedin: { type: String, trim: true },
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
    },

    // Project Information
    projectName: { type: String, trim: true },
    projectCategory: { type: String, trim: true },
    experienceLevel: { type: String, trim: true },
    numberOfFreelancers: { type: String, trim: true },
    budgetRange: { type: String, trim: true },
    projectTimeline: { type: String, trim: true },

    // Requirements
    requiredSkills: { type: [String], default: [] },
    projectDescription: { type: String, maxlength: 500 },
  },
  { timestamps: true }
);

export const BusinessProfile = mongoose.model("BusinessProfile", businessProfileSchema);
