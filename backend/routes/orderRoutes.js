import { addOrderItems, getOrderById } from "../controllers/orderController.js";

import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
