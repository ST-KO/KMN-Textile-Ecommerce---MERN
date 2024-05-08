import express from "express";
import authMiddleware from "../middleware/auth.js";

import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.put("/add", authMiddleware, addToCart);

cartRouter.put("/remove", authMiddleware, removeFromCart);

cartRouter.get("/get", authMiddleware, getCart);

export default cartRouter;
