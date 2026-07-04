import jwt from "jsonwebtoken";

// Guards admin-only routes. Verifies the Bearer token carries role "admin".
export function requireAdmin(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    if (payload.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }
    req.admin = { email: process.env.ADMIN_EMAIL };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
