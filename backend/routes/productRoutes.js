import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

import express from "express";

const router = express.Router();

// Routes
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
