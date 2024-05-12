import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Setting up Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user orders from frontend
const placeOrder = async (req, res) => {
  const frontend_url = process.env.REACT_APP_BASE_URL;
  const { userId, items, amount, address } = req.body;

  try {
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
        unit_amount: item.price * 100 * 1.5,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "aud",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 0 * 100 * 1.5,
      },
      quantity: 1,
    });

    // Creating session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      // success_url: `${frontend_url}/myorders`,
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(200).json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verifying payment
// const verifyPayment = async (req, res) => {
//   const { orderId, success } = req.body;

//   try {
//     if (success === "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.status(200).json({ success: true, message: "Paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.status(200).json({ success: false, message: "Not Paid" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// Verifying payment success
const verifyPaymentSuccess = async (req, res) => {
  const { orderId } = req.body;

  try {
    await orderModel.findByIdAndUpdate(orderId, { payment: true });
    res.status(200).json({ success: true, message: "Paid" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verifying payment fail
const verifyPaymentFail = async (req, res) => {
  const { orderId } = req.body;

  try {
    await orderModel.findByIdAndDelete(orderId);
    res.status(200).json({ success: true, message: "Not Paid" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Getting user's orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Getting all orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.statu(500).json({ success: false, message: error.message });
  }
};

// Deleting orders from admin panel
const deleteOrder = async (req, res) => {
  const { orderId } = req.body;
  try {
    await orderModel.findByIdAndDelete(orderId);

    res
      .status(200)
      .json({ success: true, message: "Order Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Updating orders' status
const updateStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    await orderModel.findByIdAndUpdate(orderId, { status: status });
    res
      .status(200)
      .json({ success: true, message: "Status Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  // verifyPayment,
  userOrders,
  verifyPaymentSuccess,
  verifyPaymentFail,
  listOrders,
  updateStatus,
  deleteOrder,
};
