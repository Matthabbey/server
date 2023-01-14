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
    title: { String, required: true, unique: true },
    desc: { String, required: true},
    photo: {String, required: false},
    username: {String, required: true},
    categories: {type: [], required: false}
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model<PostInstance>("Users", PostSchema);
