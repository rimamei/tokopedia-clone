import express from "express";
import user from "../controller/user.js";

const router = express.Router();

router.get("/seed", user.userSeed);
router.post("/signin", user.userSignin);

export default router;