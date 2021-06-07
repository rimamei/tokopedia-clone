import Category from "../models/Category.js";
import data from "../data.js";
// import Product from "../models/Product.js";
import expressAsyncHandler from "express-async-handler";

const productController = {
  categorySeed: expressAsyncHandler(async (req, res) => {
    await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);
    res.status(201).json({
      message: "Seeding Kategori berhasil",
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
      message: "Kategori berhasil ditambahkan",
      category: createdCategory,
    });
  }),
  category: expressAsyncHandler(async (req, res) => {
    const category = await Category.find().select("_id name");
    res
      .status(200)
      .json({ message: "Kategori berhasil dibaca", category: category });
  }),
  editCategory: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const findCategory = await Category.findById(id);
    if (!findCategory) {
      res.status(400).json({ message: "Update Gagal! Kategori tidak ditemukan" });
    }
    findCategory.name = name;
    const category = await findCategory.save();
    res
      .status(200)
      .json({ message: "Kategori berhasil di update", category: category });
  }),
  deleteCategory: expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const findCategory = await Category.findByIdAndRemove(id);
    if (!findCategory) {
      res.status(400).json({ message: "Hapus Gagal! Kategori tidak ditemukan" });
    }
    res.status(200).json({ message: "Kategori berhasil dihapus" });
  }),
};

export default productController;
