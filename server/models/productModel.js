import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
