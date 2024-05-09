import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Setting up Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user orders from frontend
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Creating new order
    const newOrder = new orderModel({
      userId: userId,
      items: items,
      amount: amount,
      address: address,
    });

    // Saving new order in the database
    await newOrder.save();

    // Cleaning user's cartData after saving
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // Necessary for Stripe payment
    const line_items = items.map((item) => ({
      price_data: {
        currency: "aud",
        product_data: {
          name: item.name,
        },
      },
    }));
  } catch (error) {}
};

export { placeOrder };
