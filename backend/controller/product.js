import expressAsyncHandler from "express-async-handler";
import Category from "../model/Category.js";
import Image from "../model/Image.js";
import data from "../data.js";
import Product from "../model/Product.js";

const product = {
  seedCategory: expressAsyncHandler(async (req, res) => {
    await Category.remove({});
    const createdCategory = await Category.insertMany(data.categories);
    res.status(201).json({
      message: "Category has been created successfully!",
      category: createdCategory,
    });
  }),
  addCategory: expressAsyncHandler(async (req, res) => {
    const { name } = req.body;
    const category = new Category({
      name: name,
    });
    const createdCategory = await category.save();
    res.status(201).json({
      message: "Category has been added successfully!",
      category: createdCategory,
    });
  }),
  getCategory: expressAsyncHandler(async (req, res) => {
    const category = await Category.find()
      .select("_id name productId")
      .populate({ path: "productId", select: "_id name"});

    res
      .status(200)
      .json({ message: "Get category success!", category: category });
  }),
  editCategory: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const findCategory = await Category.findById(id);
    if (!findCategory) {
      res
        .status(404)
        .json({ message: "Failed to update! Category not found." });
    }
    findCategory.name = name;
    const category = await findCategory.save();
    res.status(200).json({
      message: "Category has been added successfully!",
      category: category,
    });
  }),
  deleteCategory: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const findCategory = await Category.findByIdAndRemove(id);
    if (!findCategory) {
      res
        .status(404)
        .json({ message: "Failed to delete! Category not found." });
    }
    res
      .status(200)
      .json({ message: "Category has been deleted successfully!" });
  }),
  imageSeed: expressAsyncHandler(async (req, res) => {
    // await Image.remove({});
    const createdImage = await Image.insertMany(data.images);
    res.status(201).json({
      message: "Images has been seed successfully!",
      image: createdImage,
    });
  }),
  getImage: expressAsyncHandler(async (req, res) => {
    const image = await Image.find().select("_id imageUrl");
    res.status(200).json({ message: "Get image success!", image: image });
  }),
  seedProduct: expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const product = await Product.insertMany(data.products);

    for (let i = 0; i < data.products.length; i++) {
      const category = await Category.findOne({
        _id: data.products[i].categoryId._id,
      });

      category.productId.push({ _id: product[i]._id });
      await category.save();
    }
    res.status(201).json({
      message: "Product has been seed successfully!",
      product: product,
    });
  }),
  getProduct: expressAsyncHandler(async (req, res) => {
    const product = await Product.find()
      .populate({ path: "categoryId", select: "_id name" })
      .populate({ path: "imageId", select: "_id, imageUrl" });

    res.status(200).json({ message: "Get Product success!", product });
  }),
  detailProduct: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate({ path: "categoryId", select: "_id name" })
      .populate({ path: "imageId", select: "_id, imageUrl" });

    if (product) {
      res.status(200).json({ message: "Get Product Success!", product });
    } else {
      res.status(404).json({ message: "Product Not Found!" });
    }
  }),
};

export default product;
