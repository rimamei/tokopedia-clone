import expressAsyncHandler from "express-async-handler"; // Untuk melihat error
import data from "../data.js";
import User from "../model/User.js";

const user = {
  userSeed: expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.status(201).json({ message: "Seeding user berhasil", users: createdUser });
  }),
};

export default user;