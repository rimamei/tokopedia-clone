import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Routes from "./router/index.js";

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/tokopedia-clone",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.json());

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
