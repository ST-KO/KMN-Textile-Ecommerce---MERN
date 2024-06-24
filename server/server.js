import "dotenv/config.js";
import express from "express";
import cors from "cors";

import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { cronJob } from "./cron.js";

const app = express();
const port = process.env.PORT || 4000;
// cronJob.start();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));
app.use(express.urlencoded({ extended: false }));

// DB Connection
connectDB();

// API Endpoints
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", async (req, res) => {
  try {
    res.status(200).send("Server is running");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
