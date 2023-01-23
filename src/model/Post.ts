import mongoose, { Schema } from "mongoose";

export interface PostInstance {
  title: string;
  desc: string;
  photo: string;
  username: string;
  categories: string[];
}

const PostSchema = new Schema<PostInstance>(
  {
    title: {type: String, required: true, unique: true },
    desc: { type: String, required: true},
    photo: { type: String, required: false},
    username: { type: String, required: true},
    categories: {type: [], required: false}
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model<PostInstance>("Posts", PostSchema);
