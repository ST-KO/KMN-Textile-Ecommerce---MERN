import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    // Adding and updating item count to the cartData
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, message: error.message });
  }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "Removed from cart successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, message: error.message });
  }
};

// Fetch user's cart data
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, message: error.message });
  }
};

export { addToCart, removeFromCart, getCart };
