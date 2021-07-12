import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import orderRoutes from "./routes/orderRoutes.js"; // Routes
import productRoutes from "./routes/productRoutes.js"; // Routes
import userRoutes from "./routes/userRoutes.js"; // Routes

dotenv.config();

// Connect To DB
connectDB();

const app = express();
// JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Is Running");
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
