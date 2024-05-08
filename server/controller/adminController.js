import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Creating Token
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);
  return token;
};

// Admin Login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Checking if admin exists
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "Admin does not exist" });
    }

    // Checking if the password is correct
    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    const token = createToken(admin._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin Signup
const adminSignup = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Checking if admin already exists
    const isExists = await adminModel.findOne({ email });

    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "User with given email already exists",
      });
    }

    // Validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const admin = await newAdmin.save();
    const token = createToken(admin._id);

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { adminLogin, adminSignup };
