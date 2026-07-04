import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { FreelancerProfile } from "../models/FreelancerProfile.js";
import { BusinessProfile } from "../models/BusinessProfile.js";

// Constant-time string comparison (hash both to equal-length buffers first).
function safeEqual(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// POST /api/admin/login  { email, password }
export async function adminLogin(req, res) {
  const { email, password } = req.body || {};

  // Evaluate both checks so response timing doesn't reveal which failed.
  const emailOk = safeEqual((email || "").toLowerCase(), (process.env.ADMIN_EMAIL || "").toLowerCase());
  const hash = process.env.ADMIN_PASSWORD_HASH || "";
  const passOk = hash ? await bcrypt.compare(password || "", hash) : false;

  if (!emailOk || !passOk) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    { sub: "admin", role: "admin" },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "8h" }
  );
  return res.json({ token, admin: { email: process.env.ADMIN_EMAIL } });
}

// GET /api/admin/stats
export async function getStats(_req, res) {
  try {
    const [freelancers, businesses, verified, completed] = await Promise.all([
      User.countDocuments({ role: "freelancer" }),
      User.countDocuments({ role: "business" }),
      User.countDocuments({ isVerified: true }),
      User.countDocuments({ profileCompleted: true }),
    ]);
    return res.json({
      freelancers,
      businesses,
      totalUsers: freelancers + businesses,
      verified,
      profilesCompleted: completed,
      revenue: 0, // placeholder — no billing data yet
    });
  } catch (err) {
    console.error("[getStats]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// Combine users of a role with their profile document.
async function listByRole(role, Model) {
  const users = await User.find({ role }).sort({ createdAt: -1 }).lean();
  const profiles = await Model.find({ user: { $in: users.map((u) => u._id) } }).lean();
  const byUser = Object.fromEntries(profiles.map((p) => [String(p.user), p]));
  return users.map((u) => ({
    id: String(u._id),
    email: u.email,
    role: u.role,
    isVerified: u.isVerified,
    profileCompleted: u.profileCompleted,
    applicationStatus: u.applicationStatus,
    rejectedUntil: u.rejectedUntil,
    createdAt: u.createdAt,
    profile: byUser[String(u._id)] || null,
  }));
}

// PATCH /api/admin/users/:id/approve
export async function approveUser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { applicationStatus: "approved", rejectedUntil: null },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ message: "Approved", applicationStatus: user.applicationStatus });
  } catch (err) {
    console.error("[approveUser]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// PATCH /api/admin/users/:id/reject  → 6-month lockout
export async function rejectUser(req, res) {
  try {
    const until = new Date();
    until.setMonth(until.getMonth() + 6);
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { applicationStatus: "rejected", rejectedUntil: until },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({
      message: "Rejected",
      applicationStatus: user.applicationStatus,
      rejectedUntil: user.rejectedUntil,
    });
  } catch (err) {
    console.error("[rejectUser]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// GET /api/admin/freelancers
export async function listFreelancers(_req, res) {
  try {
    return res.json({ freelancers: await listByRole("freelancer", FreelancerProfile) });
  } catch (err) {
    console.error("[listFreelancers]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// GET /api/admin/businesses
export async function listBusinesses(_req, res) {
  try {
    return res.json({ businesses: await listByRole("business", BusinessProfile) });
  } catch (err) {
    console.error("[listBusinesses]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
