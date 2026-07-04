import { User } from "../models/User.js";
import { BusinessProfile } from "../models/BusinessProfile.js";
import { FreelancerProfile } from "../models/FreelancerProfile.js";
import { publicPath } from "../middleware/upload.js";

// Body fields arrive as strings (multipart). Parse JSON-encoded arrays safely.
function parseArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : value.split(",").map((s) => s.trim());
    } catch {
      return value.split(",").map((s) => s.trim()).filter(Boolean);
    }
  }
  return [];
}

async function markCompleted(userId) {
  await User.findByIdAndUpdate(userId, { profileCompleted: true });
}

// ───────────── POST /api/profile/business ─────────────
export async function saveBusinessProfile(req, res) {
  try {
    if (req.user.role !== "business") {
      return res.status(403).json({ message: "Business accounts only" });
    }
    const b = req.body;
    const required = {
      "Company Name": b.companyName,
      "First Name": b.firstName,
      "Last Name": b.lastName,
      "Account Email": b.accountEmail,
      "Phone Number": b.phone,
      Industry: b.industry,
      "Company Size": b.companySize,
      "About Company": b.about,
    };
    const missing = Object.entries(required)
      .filter(([, v]) => !String(v || "").trim())
      .map(([k]) => k);
    if (missing.length) {
      return res.status(400).json({ message: `Required: ${missing.join(", ")}` });
    }

    const logoFile = req.files?.logo?.[0];

    const data = {
      user: req.user.id,
      companyName: b.companyName,
      firstName: b.firstName,
      lastName: b.lastName,
      accountEmail: b.accountEmail,
      companyEmail: b.companyEmail,
      phone: b.phone,
      website: b.website,
      address: b.address,
      city: b.city,
      state: b.state,
      country: b.country,
      zipCode: b.zipCode,
      industry: b.industry,
      companySize: b.companySize,
      about: b.about,
      social: {
        linkedin: b.linkedin,
        facebook: b.facebook,
        instagram: b.instagram,
      },
      projectName: b.projectName,
      projectCategory: b.projectCategory,
      experienceLevel: b.experienceLevel,
      numberOfFreelancers: b.numberOfFreelancers,
      budgetRange: b.budgetRange,
      projectTimeline: b.projectTimeline,
      requiredSkills: parseArray(b.requiredSkills),
      projectDescription: b.projectDescription,
    };
    if (logoFile) data.logo = publicPath(logoFile);

    const profile = await BusinessProfile.findOneAndUpdate(
      { user: req.user.id },
      data,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    await markCompleted(req.user.id);

    return res.status(201).json({ message: "Profile saved", profile });
  } catch (err) {
    console.error("[saveBusinessProfile]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ───────────── POST /api/profile/freelancer ─────────────
export async function saveFreelancerProfile(req, res) {
  try {
    if (req.user.role !== "freelancer") {
      return res.status(403).json({ message: "Freelancer accounts only" });
    }
    const f = req.body;
    const skills = parseArray(f.skills);
    const required = {
      "First Name": f.firstName,
      "Last Name": f.lastName,
      Email: f.email,
      "Phone Number": f.phone,
      "Job Title": f.jobTitle,
      "Experience Level": f.experienceLevel,
      Availability: f.availability,
      "Hourly Rate": f.hourlyRate,
      "Portfolio Website": f.website,
    };
    const missing = Object.entries(required)
      .filter(([, v]) => !String(v || "").trim())
      .map(([k]) => k);
    if (skills.length === 0) missing.push("Skills");
    if (missing.length) {
      return res.status(400).json({ message: `Required: ${missing.join(", ")}` });
    }

    const avatarFile = req.files?.avatar?.[0];
    const resumeFile = req.files?.resume?.[0];

    const data = {
      user: req.user.id,
      firstName: f.firstName,
      lastName: f.lastName,
      email: f.email,
      phone: f.phone,
      location: f.location,
      languages: parseArray(f.languages),
      jobTitle: f.jobTitle,
      experienceLevel: f.experienceLevel,
      availability: f.availability,
      hourlyRate: f.hourlyRate,
      skills,
      about: f.about,
      portfolio: {
        website: f.website,
        linkedin: f.linkedin,
        behance: f.behance,
        github: f.github,
        dribbble: f.dribbble,
        instagram: f.instagram,
      },
    };
    if (avatarFile) data.avatar = publicPath(avatarFile);
    if (resumeFile) data.resume = publicPath(resumeFile);

    const profile = await FreelancerProfile.findOneAndUpdate(
      { user: req.user.id },
      data,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    await markCompleted(req.user.id);

    return res.status(201).json({ message: "Profile saved", profile });
  } catch (err) {
    console.error("[saveFreelancerProfile]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ───────────── GET /api/profile/me ─────────────
export async function getMyProfile(req, res) {
  try {
    const Model = req.user.role === "business" ? BusinessProfile : FreelancerProfile;
    const profile = await Model.findOne({ user: req.user.id });
    return res.json({ profile });
  } catch (err) {
    console.error("[getMyProfile]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
