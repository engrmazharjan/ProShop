import { authUser } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

// Routes
router.post("/login", authUser);

export default router;
