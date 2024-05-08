import express from "express";

import { adminLogin, adminSignup } from "../controller/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);

adminRouter.post("/login", adminLogin);

export default adminRouter;
