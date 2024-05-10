import express from "express";

import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  // verifyPayment,
  verifyPaymentFail,
  verifyPaymentSuccess,
} from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

// orderRouter.post("/verify", verifyPayment);

orderRouter.patch("/verify/success", verifyPaymentSuccess);

orderRouter.delete("/verify/fail", verifyPaymentFail);

orderRouter.get("/userorders", authMiddleware, userOrders);

orderRouter.get("/list", listOrders);

orderRouter.patch("/status", updateStatus);

export default orderRouter;
