import { admin, protect } from "../middleware/authMiddleware.js";
import {
  deleteProduct,
  getProductById,
  getProducts,
} from "../controllers/productController.js";

import express from "express";

const router = express.Router();

// Routes
router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
