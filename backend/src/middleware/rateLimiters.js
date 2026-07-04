import rateLimit from "express-rate-limit";

// Lenient during local development so testing isn't blocked; strict in production.
const isProd = process.env.NODE_ENV === "production";

// Sensitive actions only (login, signup, forgot/reset password).
// NOT applied to /refresh or /verify-email, which fire during normal use.
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isProd ? 20 : 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests. Please try again later." },
});

// Stricter cap for resend-verification (it sends real email).
export const resendLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: isProd ? 3 : 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many verification emails. Try again in an hour." },
});
