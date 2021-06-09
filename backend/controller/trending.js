import expressAsyncHandler from "express-async-handler"; // Untuk melihat error
import data from "../data.js";
import Trending from "../model/Trending.js";

const trending = {
  trendingSeed: expressAsyncHandler(async (req, res) => {
    await Trending.remove({});
    const createdTrending = await Trending.insertMany(data.trending);
    res.status(201).json({
      message: "Trending has been seed successfully!",
      Trending: createdTrending,
    });
  }),
};

export default trending;
