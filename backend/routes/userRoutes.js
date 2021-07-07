import { authUser, getUserProfile } from "../controllers/userController.js";

import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
