import express from "express";
import productController from "../controller/ProductController.js";

const productRouter = express.Router();

productRouter.post("/category", productController.addCategory);
productRouter.get("/category", productController.category);
productRouter.put("/category/:id", productController.editCategory);
productRouter.delete("/category/:id", productController.deleteCategory);

export default productRouter;