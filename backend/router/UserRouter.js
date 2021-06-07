import express from "express";
import userController from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.get("/seed", userController.userSeed);

export default userRouter;
