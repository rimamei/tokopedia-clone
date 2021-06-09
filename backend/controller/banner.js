import expressAsyncHandler from "express-async-handler";
import Banner from "../model/Banner.js";
import data from "../data.js";

const banner = {
  bannerSeed: expressAsyncHandler(async (req, res) => {
    await Banner.remove({});
    const createdbanner = await Banner.insertMany(data.banner);
    res.status(201).json({
      message: "Banner has been created successfully!",
      banner: createdbanner,
    });
  }),
  addBanner: expressAsyncHandler(async (req, res) => {
    const { name } = req.body;
    const banner = new Banner({
      name: name,
    });
    const createdBanner = await banner.save();
    res.status(201).json({
      message: "Banner has been added successfully!",
      banner: createdBanner,
    });
  }),
  getBanner: expressAsyncHandler(async (req, res) => {
    const banner = await Banner.find().select("_id imageUrl");
    res.status(200).json({ message: "Get Banner success!", banner: banner });
  }),
  editBanner: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const findBanner = await Banner.findById(id);
    if (!findBanner) {
      res.status(404).json({ message: "Failed to update! banner not found." });
    }
    findBanner.name = name;
    const banner = await findBanner.save();
    res.status(200).json({
      message: "Banner has been added successfully!",
      banner: banner,
    });
  }),
  deleteBanner: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const findBanner = await Banner.findByIdAndRemove(id);
    if (!findBanner) {
      res.status(404).json({ message: "Failed to delete! Banner not found." });
    }
    res.status(200).json({ message: "Banner has been deleted successfully!" });
  }),
};

export default banner;
