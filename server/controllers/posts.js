import mongoose from "mongoose";
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
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No post with this id");

  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with this id");

  await Post.findByIdAndRemove(id);
  res.status(200).json("post delete successfully");
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with this id");

  const post = await Post.findById(id);
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.status(200).send(updatedPost);
};
