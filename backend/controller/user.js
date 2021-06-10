import expressAsyncHandler from "express-async-handler"; // Untuk melihat error
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../model/User.js";
import { generateToken } from "../utils/utils.js";

const user = {
  userSeed: expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res
      .status(201)
      .json({ message: "Seeding user berhasil", users: createdUser });
  }),
  userSignin: expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).json({ message: "Invalid user email or password" });
  }),
};

export default user;
