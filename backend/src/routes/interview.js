import { Router } from "express";
import {
  startInterview,
  submitAnswer,
  endInterview,
  ttsHandler,
  getSession,
} from "../controllers/interviewController.js";
import { protect } from "../middleware/protect.js";

const router = Router();

// All interview routes require a logged-in user; sessions tie to req.user.
router.use(protect);

router.post("/start", startInterview);
router.post("/answer", submitAnswer);
router.post("/end", endInterview);
router.post("/tts", ttsHandler);
router.get("/:sessionId", getSession);

export default router;
