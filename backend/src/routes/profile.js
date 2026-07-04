import { Router } from "express";
import {
  saveBusinessProfile,
  saveFreelancerProfile,
  getMyProfile,
} from "../controllers/profileController.js";
import { protect } from "../middleware/protect.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.get("/me", protect, getMyProfile);

router.post(
  "/business",
  protect,
  upload.fields([{ name: "logo", maxCount: 1 }]),
  saveBusinessProfile
);

router.post(
  "/freelancer",
  protect,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  saveFreelancerProfile
);

export default router;
