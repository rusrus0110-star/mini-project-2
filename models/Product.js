import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters long"],
      maxlength: [100, "Product name must be less than 100 characters"],
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [0, "Product quantity cannot be negative"],
      default: 1,
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Product price cannot be negative"],
    },

    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
