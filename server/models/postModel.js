import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
