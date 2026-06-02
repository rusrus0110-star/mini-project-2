import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
