import express from "express";
import banner from "../controller/banner.js";

const router = express.Router();

router.post("/", banner.addBanner);
router.get("/", banner.getBanner);
router.put("/:id", banner.editBanner);
router.delete("/:id", banner.deleteBanner);
router.get("/seed", banner.bannerSeed);

export default router;
