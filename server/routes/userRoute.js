import express from "express";

import { userLogin, userSignUp } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", userSignUp);

userRouter.post("/login", userLogin);

export default userRouter;
