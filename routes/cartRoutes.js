import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/cart
// Получить все продукты из корзины
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// POST /api/cart
// Добавить новый продукт в корзину
router.post("/", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;

    if (!name || quantity === undefined || price === undefined) {
      return res.status(400).json({
        message: "Name, quantity and price are required",
      });
    }

    if (typeof name !== "string") {
      return res.status(400).json({
        message: "Product name must be a string",
      });
    }

    if (typeof quantity !== "number" || quantity < 0) {
      return res.status(400).json({
        message: "Quantity must be a positive number or zero",
      });
    }

    if (typeof price !== "number" || price < 0) {
      return res.status(400).json({
        message: "Price must be a positive number or zero",
      });
    }

    const createdProduct = await Product.create({
      name,
      quantity,
      price,
    });

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
});

export default router;