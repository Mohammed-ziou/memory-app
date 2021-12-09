import { signIn, signUp } from "../controllers/users.js";

import express from "express";
const userRoute = express.Router();

userRoute.post("/signin", signIn);
userRoute.post("/signup", signUp);

export default userRoute;
