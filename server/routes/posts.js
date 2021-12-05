import { asyncMiddleware } from "../middleware/async.js";
import { getPosts, createPost } from "../controllers/posts.js";
import express from "express";
const postsRoute = express.Router();

postsRoute.get("/", getPosts);
postsRoute.post("/", createPost);

export default postsRoute;
