import express from "express";
import banner from "./banner.js";
import product from "./product.js";
import user from "./user.js";
import trending from "./trending.js";

const Route = express.Router();

Route.use("/banner", banner);
Route.use("/", product);
Route.use("/trending", trending);
Route.use("/user", user);

export default Route;
