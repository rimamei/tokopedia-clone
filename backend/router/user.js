import express from "express";
import user from "../controller/user.js";

const router = express.Router();

router.get("/seed", user.userSeed);

export default router;