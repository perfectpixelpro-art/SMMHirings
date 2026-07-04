import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Token } from "../models/Token.js";
import {
  signAccessToken,
  signRefreshToken,
  randomToken,
  hashToken,
  setRefreshCookie,
  clearRefreshCookie,
  REFRESH_COOKIE,
} from "../utils/tokens.js";
import { sendVerificationEmail, sendResetEmail } from "../utils/email.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CLIENT_URL = () => process.env.CLIENT_URL || "http://localhost:5173";

// ───────────────────────── POST /api/auth/signup ─────────────────────────
export async function signup(req, res) {
  try {
    const { email, password, role } = req.body || {};

    if (!email || !EMAIL_RE.test(email)) {
      return res.status(400).json({ message: "A valid email is required" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }
    if (!["freelancer", "business"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      password: hashed,
      role,
      isVerified: false,
    });

    const raw = randomToken();
    await Token.create({
      userId: user._id,
      token: raw,
      type: "email_verification",
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
    });

    try {
      await sendVerificationEmail(
        user.email,
        `${CLIENT_URL()}/verify-email?token=${raw}`
      );
    } catch (mailErr) {
      // Account is created; emailing failed (e.g. Resend recipient restriction).
      // Log it clearly and tell the truth so the user isn't left waiting.
      console.error("[signup] verification email failed:", mailErr.message);
      return res.status(201).json({
        message:
          "Account created, but we couldn't send the verification email. Use 'Resend' once email is configured.",
        emailFailed: true,
      });
    }

    return res
      .status(201)
      .json({ message: "Check your email to verify your account" });
  } catch (err) {
    console.error("[signup]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ──────────────────────── POST /api/auth/verify-email ────────────────────
export async function verifyEmail(req, res) {
  try {
    const { token } = req.body || {};
    if (!token) return res.status(400).json({ message: "Token is required" });

    const record = await Token.findOne({ token, type: "email_verification" });
    if (!record || record.used) {
      return res
        .status(400)
        .json({ message: "Invalid or already-used verification link" });
    }
    if (record.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "Verification link has expired" });
    }

    const user = await User.findByIdAndUpdate(
      record.userId,
      { isVerified: true },
      { new: true }
    );
    record.used = true;
    await record.save();

    // Return the role so the frontend can route to the correct login portal.
    return res.json({
      message: "Email verified, you can now log in",
      role: user?.role || null,
    });
  } catch (err) {
    console.error("[verifyEmail]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ─────────────────── POST /api/auth/resend-verification ──────────────────
export async function resendVerification(req, res) {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email: email.toLowerCase() });
    // Don't reveal whether the email exists.
    if (!user) {
      return res.json({ message: "Verification email sent" });
    }
    if (user.isVerified) {
      return res.status(400).json({ message: "Email is already verified" });
    }

    await Token.deleteMany({ userId: user._id, type: "email_verification" });

    const raw = randomToken();
    await Token.create({
      userId: user._id,
      token: raw,
      type: "email_verification",
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    try {
      await sendVerificationEmail(
        user.email,
        `${CLIENT_URL()}/verify-email?token=${raw}`
      );
    } catch (mailErr) {
      console.error("[resendVerification] email failed:", mailErr.message);
      return res
        .status(502)
        .json({ message: "Could not send the email. Check email configuration." });
    }

    return res.json({ message: "Verification email sent" });
  } catch (err) {
    console.error("[resendVerification]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ───────────────────────────── POST /api/auth/login ──────────────────────
export async function login(req, res) {
  try {
    const { email, password, role } = req.body || {};

    const user = await User.findOne({ email: (email || "").toLowerCase() }).select(
      "+password"
    );
    // Never reveal whether the email exists.
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Role guard (two-portal product): account must match the portal used.
    if (role && user.role !== role) {
      return res
        .status(403)
        .json({ message: `This account is registered as a ${user.role}` });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: "Please verify your email first" });
    }

    // Rejected applicants are locked out until rejectedUntil.
    if (
      user.applicationStatus === "rejected" &&
      user.rejectedUntil &&
      user.rejectedUntil > new Date()
    ) {
      return res.status(403).json({
        message: "Your application was rejected. You may re-apply after the lockout period.",
        rejectedUntil: user.rejectedUntil,
      });
    }

    const ok = await bcrypt.compare(password || "", user.password);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    user.refreshTokenHash = await hashToken(refreshToken);
    await user.save();

    setRefreshCookie(res, refreshToken);

    return res.json({ accessToken, user: user.toJSON() });
  } catch (err) {
    console.error("[login]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ──────────────────────────── POST /api/auth/refresh ─────────────────────
export async function refresh(req, res) {
  try {
    const incoming = req.cookies?.[REFRESH_COOKIE];
    if (!incoming) {
      return res.status(401).json({ message: "No refresh token" });
    }

    let payload;
    try {
      payload = jwt.verify(incoming, process.env.JWT_REFRESH_SECRET);
    } catch {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const user = await User.findById(payload.sub).select("+refreshTokenHash");
    if (!user || !user.refreshTokenHash) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const match = await bcrypt.compare(incoming, user.refreshTokenHash);
    if (!match) {
      // Token reuse / mismatch → kill the session.
      user.refreshTokenHash = null;
      await user.save();
      clearRefreshCookie(res);
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // Rotate: issue a brand-new refresh token and replace the stored hash.
    const accessToken = signAccessToken(user);
    const newRefresh = signRefreshToken(user);
    user.refreshTokenHash = await hashToken(newRefresh);
    await user.save();
    setRefreshCookie(res, newRefresh);

    return res.json({ accessToken });
  } catch (err) {
    console.error("[refresh]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ──────────────────────────── POST /api/auth/logout ──────────────────────
export async function logout(req, res) {
  try {
    const incoming = req.cookies?.[REFRESH_COOKIE];
    if (incoming) {
      try {
        const payload = jwt.verify(incoming, process.env.JWT_REFRESH_SECRET);
        await User.findByIdAndUpdate(payload.sub, { refreshTokenHash: null });
      } catch {
        /* token invalid — nothing to clear server-side */
      }
    }
    clearRefreshCookie(res);
    return res.json({ message: "Logged out" });
  } catch (err) {
    console.error("[logout]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// ──────────────────────── POST /api/auth/forgot-password ─────────────────
export async function forgotPassword(req, res) {
  const GENERIC = {
    message: "If this email exists, a reset link has been sent",
  };
  try {
    const { email } = req.body || {};
    const user = email
      ? await User.findOne({ email: email.toLowerCase() })
      : null;

    if (user) {
      await Token.deleteMany({ userId: user._id, type: "password_reset" });
      const raw = randomToken();
      await Token.create({
        userId: user._id,
        token: raw,
        type: "password_reset",
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1h
      });
      await sendResetEmail(
        user.email,
        `${CLIENT_URL()}/reset-password?token=${raw}`
      );
    }

    // Always the same response → no account enumeration.
    return res.json(GENERIC);
  } catch (err) {
    console.error("[forgotPassword]", err);
    return res.json(GENERIC); // still generic even on error
  }
}

// ──────────────────────── POST /api/auth/reset-password ──────────────────
export async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req.body || {};
    if (!token) return res.status(400).json({ message: "Token is required" });
    if (!newPassword || newPassword.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const record = await Token.findOne({ token, type: "password_reset" });
    if (!record || record.used || record.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset link" });
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    await User.findByIdAndUpdate(record.userId, {
      password: hashed,
      refreshTokenHash: null, // invalidate all existing sessions
    });

    record.used = true;
    await record.save();

    return res.json({ message: "Password updated, please log in" });
  } catch (err) {
    console.error("[resetPassword]", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
