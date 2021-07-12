import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Routes from "./router/index.js";

dotenv.config();

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/tokopedia-clone",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", Routes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// expressAsyncHandler untuk melihat error
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
