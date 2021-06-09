import mongoose from "mongoose";

const trendingSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      required: true,
    },
    isUp: {
      type: Boolean,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trending = mongoose.model("Trending", trendingSchema);
export default Trending;