import { Router } from "express";
import {
  signup,
  verifyEmail,
  resendVerification,
  login,
  refresh,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { protect } from "../middleware/protect.js";
import { authLimiter, resendLimiter } from "../middleware/rateLimiters.js";

const router = Router();

// Rate limit only the sensitive actions. /refresh, /verify-email and /logout
// are intentionally left out — they fire during normal use and shouldn't be capped.
router.post("/signup", authLimiter, signup);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification", resendLimiter, resendVerification);
router.post("/login", authLimiter, login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", authLimiter, forgotPassword);
router.post("/reset-password", authLimiter, resetPassword);

// Example protected route — returns the current user.
router.get("/me", protect, (req, res) => res.json({ user: req.user.toJSON() }));

export default router;
