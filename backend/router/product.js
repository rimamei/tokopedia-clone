import express from "express";
import productController from "../controller/product.js";

const router = express.Router();

router.get("/category/seed", productController.seedCategory);
router.post("/category", productController.addCategory);
router.get("/category", productController.getCategory);
router.put("/category/:id", productController.editCategory);
router.delete("/category/:id", productController.deleteCategory);

router.get("/image/seed", productController.imageSeed);
router.get("/image", productController.getImage);

router.get("/product/seed", productController.seedProduct);
router.get("/product", productController.getProduct);
router.get("/product/:id", productController.detailProduct);

export default router;