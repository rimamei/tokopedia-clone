import expressAsyncHandler from "express-async-handler"; // Untuk melihat error
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../model/User.js";
import { sendMailData } from "../utils/mailer.js";
import {
  createAccesToken,
  createActivationToken,
  createRefreshToken,
} from "../utils/jwt.js";
// import cookie from "cookie";

const user = {
  seed: expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res
      .status(201)
      .json({ message: "Seeding user success", users: createdUser });
  }),
  signup: expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(401).json({ message: "Email already exist" });
    }

    const newUser = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
    });

    const createdUser = await newUser.save();
    const token = createActivationToken(createdUser);

    sendMailData(email, {
      name,
      text: "Sebelum Menggunakan Aplikasi Anda Harus Verifikasi Email",
      url: `${process.env.CLIENT_URL}/verify?token=${token}`,
      textBtn: "Verif Now",
    });

    res.status(201).json({
      message:
        "You've successfully sign up! Please, activate your email address",
      token,
    });
  }),
  activateEmail: expressAsyncHandler(async (req, res) => {
    const { _id } = req.token;

    const user = await User.findOne({ _id });
    user.isVerified = true;

    const verifiedUser = await user.save();

    res.status(200).json({
      message: "You've successfully activate your email address",
      user: verifiedUser,
    });
  }),
  resendActivation: expressAsyncHandler(async (req, res) => {
    const { name, email } = req.body;

    const user = await User.findOne({ email });
    if (user.isVerified) {
      res.status(400).json({ message: "Your account has been verified" });
    }

    const token = createActivationToken(req.token);
    sendMailData(email, {
      name: name,
      text: "Sebelum Menggunakan Aplikasi Anda Harus Verifikasi Email",
      url: `${process.env.CLIENT_URL}/verify?token=${token}`,
      textBtn: "Verif Now",
    });
    res.status(200).json({
      message: "Activation has sent! Please, activate your email address",
      token,
    });
  }),
  signin: expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = bcrypt.compareSync(password, user.password);

    if (user) {
      if (!user.isVerified) {
        res.status(400).json({ message: "You need to verify your account" });
      }
      if (isMatch) {
        const refresh_token = createRefreshToken(user);
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days,
          secure: false,
          sameSite: "strict",
        });

        // const setCookie = res.setHeader(
        //   "Set-Cookie",
        //   cookie.serialize("token", refresh_token, {
        //     httpOnly: true,
        //     maxAge: 60 * 60 * 24 * 7,
        //     secure: false,
        //     path: "/",
        //     sameSite: "strict",
        //   })
        // );

        // console.log("cookie: ", setCookie);

        res.status(200).json({
          message: "You've successfully sign in",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: refresh_token,
          },
        });
        return;
      }
    }
    res.status(401).json({ message: "Invalid user email or password" });
  }),
  forgotPassword: expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email does not exist." });
    }

    const accessToken = createAccesToken(user);

    sendMailData(email, {
      name: user.name,
      text: "Klik link di bawah ini untuk mereset password anda",
      url: `${process.env.CLIENT_URL}/reset?token=${accessToken}`,
      textBtn: "Reset Password",
    });

    res.status(200).json({
      message: "Email has been sent. Please check your email!",
      token: accessToken,
    });
  }),
  resetPassword: expressAsyncHandler(async (req, res) => {
    console.log("reset password: ", req.body);
    console.log("reset decoded: ", req.token);

    const { password } = req.body;
    const { _id } = req.token;

    const newPassword = bcrypt.hashSync(password, 8);

    await User.findOneAndUpdate({ _id }, { password: newPassword });

    res.json({ message: "Password successfully updated!" });
  }),
  logout: expressAsyncHandler(async (req, res) => {
    res.clearCookie("refreshtoken", { path: "/" });
    return res.status(200).json({ message: "You've successfully logged out." });
  }),
  detailUser: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    res.status(200).json({ message: "Detail User", user });
  }),
  deleteUser: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.json({ message: "Deleted Account Success!" });
  }),
  // googleLogin: expressAsyncHandler(async (req, res) => {
  //   const { tokenId } = req.body;

  // }),
};

export default user;
