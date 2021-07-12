import { check } from "express-validator";
import { validationResult } from "express-validator";

export const signupValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be in alphabet"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least  6 characters long"),
];

export const signinValidator = [
  check("email").isEmail().withMessage("Email must be valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Email must be valid email address"),
];

export const resetPasswordValidator = [
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password must be at least 6 characters long"),
];

export const runValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  next();
};
