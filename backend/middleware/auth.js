import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authVerif = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_ACTIVATION_SECRET,
      function (err, user) {
        if (!err) {
          console.log('decode', user);
          req.token = user;
          next();
        } else {
          if (err.message === "jwt malformed") {
            res.status(400).json({ message: "Invalid Token" });
          } else if (err.message === "jwt expired") {
            res.status(400).json({ message: "Token Expired" });
          } else {
            res.status(400).json({ message: "Invalid Token" });
          }
        }
      }
    );
  } else {
    res.status(400).json({ message: "Token Needed" });
  }
};

export const authReset = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, function (err, decoded) {
      if (!err) {
        req.token = decoded;
        next();
      } else {
        if (err.message === "jwt malformed") {
          res.status(400).json({ message: "Invalid Token" });
        } else if (err.message === "jwt expired") {
          res.status(400).json({ message: "Token Expired" });
        } else {
          res.status(400).json({ message: "Invalid Token" });
        }
      }
    });
  } else {
    res.status(400).json({ message: "Token Needed" });
  }
};
