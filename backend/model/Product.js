import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numReviews: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    sold: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    imageId: [
      {
        type: ObjectId,
        ref: "Image",
      },
    ],
    categoryId: {
      type: ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
