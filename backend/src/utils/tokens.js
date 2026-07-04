import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// --- JWT access/refresh tokens ---
export function signAccessToken(user) {
  return jwt.sign(
    { sub: user.id || user._id.toString(), role: user.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "15m" }
  );
}

export function signRefreshToken(user) {
  return jwt.sign(
    { sub: user.id || user._id.toString() },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );
}

// --- Random one-time tokens (email verification / password reset) ---
export function randomToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function hashToken(token) {
  return bcrypt.hash(token, 12);
}

// --- Refresh-token cookie helpers ---
export const REFRESH_COOKIE = "refreshToken";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

function cookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict",
    path: "/api/auth", // cookie only sent to auth endpoints
  };
}

export function setRefreshCookie(res, token) {
  res.cookie(REFRESH_COOKIE, token, { ...cookieOptions(), maxAge: SEVEN_DAYS });
}

export function clearRefreshCookie(res) {
  res.clearCookie(REFRESH_COOKIE, cookieOptions());
}
