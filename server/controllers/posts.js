import { Post } from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    res.status(201).json(await newPost.save());
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
