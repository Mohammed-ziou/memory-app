import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import { auth } from "../middleware/auth.js";
import express from "express";
const postsRoute = express.Router();

postsRoute.get("/", getPosts);
postsRoute.post("/", auth, createPost);
postsRoute.patch("/:id", auth, updatePost);
postsRoute.delete("/:id", auth, deletePost);
postsRoute.patch("/:id/likePost", auth, likePost);

export default postsRoute;
