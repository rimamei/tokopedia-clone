import express from "express";
import userSeed from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.get("/seed", userSeed);

export default userRouter;
