import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imageId: [
      {
        type: ObjectId,
        ref: "Image",
      },
    ],
    seller: {
      type: String,
      required: true,
    },
    categoryId: {
      type: ObjectId,
      ref: "Category",
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    numReviews: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;