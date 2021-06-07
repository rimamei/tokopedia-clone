import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./router/UserRouter.js";
import productRouter from "./router/ProductRouter.js";

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

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/banner", (req, res) => {
  res.send(data.banner);
});

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
