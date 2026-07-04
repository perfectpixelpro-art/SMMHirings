import mongoose from "mongoose";

/**
 * Opens a single pooled connection to MongoDB using the MONGO_URI from .env.
 * Call this once at startup, before the server starts listening.
 *
 * Mongoose keeps the connection alive and reuses it for every query —
 * you never open/close a connection per request.
 */
export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set. Did you create server/.env?");
  }

  // Surface connection drops in the logs instead of failing silently.
  mongoose.connection.on("error", (err) => {
    console.error("[mongo] connection error:", err.message);
  });
  mongoose.connection.on("disconnected", () => {
    console.warn("[mongo] disconnected");
  });

  await mongoose.connect(uri);
  console.log(`[mongo] connected → ${mongoose.connection.name}`);
}
