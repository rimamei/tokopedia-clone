import data from "../data.js";
import User from "../models/UserModel.js";
import expressAsyncHandler from "express-async-handler";

const userSeed = expressAsyncHandler(async (req, res) => {
  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({ createdUser });
});

export default userSeed;
