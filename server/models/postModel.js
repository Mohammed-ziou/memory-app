import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: { type: String },
    message: { type: String },
    name: { type: String },
    creator: { type: String },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
