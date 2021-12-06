import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import express from "express";
const postsRoute = express.Router();

postsRoute.get("/", getPosts);
postsRoute.post("/", createPost);
postsRoute.patch("/:id", updatePost);
postsRoute.delete("/:id", deletePost);
postsRoute.patch("/:id/likePost", likePost);

export default postsRoute;
