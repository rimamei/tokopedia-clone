import express from "express";
import trending from "../controller/trending.js";

const router = express.Router();

router.get("/seed", trending.trendingSeed);

export default router;