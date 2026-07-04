import "dotenv/config";
import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import adminRoutes from "./routes/admin.js";
import interviewRoutes from "./routes/interview.js";
import { attachInterviewSocket } from "./ws/interviewSocket.js";
import { UPLOAD_DIR } from "./middleware/upload.js";

const app = express();

// --- Global middleware ---
// CORS must allow credentials (cookies) from the frontend origin only.
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // parse JSON request bodies
app.use(cookieParser()); // parse the HttpOnly refresh-token cookie

// --- Routes ---
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/interview", interviewRoutes);

// Serve uploaded files (logos, avatars, resumes).
app.use("/uploads", express.static(UPLOAD_DIR));

// --- Fallback for unknown routes ---
app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// --- Start: connect to DB first, then listen ---
const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    const server = http.createServer(app);
    attachInterviewSocket(server); // WebSocket for the AI interview
    server.listen(PORT, () => {
      console.log(`[api] listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("[startup] failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
