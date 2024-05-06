import express from "express";
import multer from "multer";
import {
  createNewProducts,
  getAllProducts,
  removeProduct,
  updateProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

productRouter.post("/create", upload.single("image"), createNewProducts);

productRouter.get("/list", getAllProducts);

productRouter.post("/remove", removeProduct);

productRouter.patch("/update", upload.single("image"), updateProduct);

export default productRouter;
