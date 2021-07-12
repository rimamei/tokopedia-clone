import express from "express";
import user from "../controller/user.js";
import { authReset, authVerif } from "../middleware/auth.js";
import {
  forgotPasswordValidator,
  resetPasswordValidator,
  runValidator,
  signinValidator,
  signupValidator,
} from "../middleware/validator.js";

const router = express.Router();

router.get("/seed", user.seed);
router.get("/verify", authVerif, user.activateEmail);
router.get("/logout", user.logout);
router.get("/:id", user.detailUser);

router.post("/signup", signupValidator, runValidator, user.signup);
router.post("/signin", signinValidator, runValidator, user.signin);
router.post(
  "/reset",
  forgotPasswordValidator,
  runValidator,
  user.forgotPassword
);
router.put(
  "/reset",
  resetPasswordValidator,
  runValidator,
  authReset,
  user.resetPassword
);

router.delete("/delete/:id", user.deleteUser);

export default router;
