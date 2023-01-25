import mongoose, { Schema } from "mongoose";

export interface CategoryInstance {
  name: string[],
}

const CategorySchema = new Schema<CategoryInstance>(
  {
    name: {
        type: [String],
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = mongoose.model<CategoryInstance>("Category", CategorySchema);
