import colors from "colors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import products from "./data/products.js";

dotenv.config();

// Connect To DB
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API Is Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
