import productModel from "../models/productModel.js";
import fs from "fs";

// Create Product Items
const createNewProducts = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new productModel({
    brand: req.body.brand,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await product.save();
    res
      .status(200)
      .json({ success: true, message: "Product is created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Product Items
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);

    fs.unlink(`uploads/${product.image}`, () => {});

    await productModel.findByIdAndDelete(req.body.id);

    res
      .status(200)
      .json({ success: true, message: "Product is successfully removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Existing Product
const updateProduct = async (req, res) => {
  const newImageFilename = `${req.file.filename}`;

  try {
    const existingProduct = await productModel.findById(req.body.id);

    // Delete the old image file
    fs.unlink(`uploads/${existingProduct.image}`, () => {});

    // Update the product with new data
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.body.id,
      {
        brand: req.body.brand,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: newImageFilename,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { createNewProducts, getAllProducts, removeProduct, updateProduct };
