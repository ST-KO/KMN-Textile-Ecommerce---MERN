import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

// DB Connection
connectDB();

// API Endpoints
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

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
