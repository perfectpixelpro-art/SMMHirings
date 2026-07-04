import { Router } from "express";
import {
  adminLogin,
  getStats,
  listFreelancers,
  listBusinesses,
  approveUser,
  rejectUser,
} from "../controllers/adminController.js";
import { requireAdmin } from "../middleware/adminAuth.js";
import { authLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.post("/login", authLimiter, adminLogin);

// Verify a stored admin token is still valid (used by the frontend guard).
router.get("/me", requireAdmin, (req, res) => res.json({ admin: req.admin }));

// Dashboard data
router.get("/stats", requireAdmin, getStats);
router.get("/freelancers", requireAdmin, listFreelancers);
router.get("/businesses", requireAdmin, listBusinesses);
router.patch("/users/:id/approve", requireAdmin, approveUser);
router.patch("/users/:id/reject", requireAdmin, rejectUser);

export default router;
