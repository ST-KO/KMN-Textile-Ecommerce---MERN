import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requied: true,
  },
  password: {
    type: String,
    requied: true,
  },
});

const adminModel =
  mongoose.models.admin || mongoose.model("admin", adminSchema);

export default adminModel;
