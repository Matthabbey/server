import express, { Request, Response } from "express";
import { PostModel } from "../model/Post";

export const CreatePost = async (req: Request, res: Response) => {
  const { title, desc, photo, category, username } = req.body;

  try {
    const createPost = new PostModel({
      title,
      desc,
      photo,
      category,
      username,
    });
    // if(title || username) return res.status(401).json({msg: "The title or username already in use"})
    console.log("See me here");
    
    const savedPost = await createPost.save();
    return res.status(201).json({ msg: "Successfully created", savedPost });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: console.log(error) });
  }
};

export const UpdatePost = async (req: Request, res: Response) => {
  const { title, desc, photo, category, username } = req.body;
  const post = await PostModel.findById(req.params.id);
  if(!post) return res.status(404).json({msg: "This post is not found or has been deleted by user"})
  if (post.username === req.body.username) {
    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res
        .status(200)
        .json({ msg: "Your post has been successfully updated", updatedPost });
    } catch (error) {
      return res.status(500).json({ message: console.log(error) });
    }
  } else {
    res.status(401).json({ msg: "You can only update your post" });
  }
};

export const DeleteUserPost = async (req: Request, res: Response) => {
  try {
    const deleteOne = await PostModel.findByIdAndDelete(req.params.id);
    if (!deleteOne) {
      return res.status(404).json({
        message: "This item has been deleted",
      });
    }
    return res.status(200).json({
      message: "You have successfully deleted this Post",
    });
  } catch (error) {
    return res.status(500).json({ message: console.log(error) });
  }
};

export const GetUserPost = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const findUser = await PostModel.findById(userId);
    if (!findUser) {
      return res.status(404).json({ message: "This user is not found" });
    }
    return res.status(200).json({ message: "Successfully fetched", findUser });
  } catch (error) {
    return res.status(500).json({ message: console.log(error) });
  }
};

export const GetAllUserPosts = async (req: Request, res: Response) => {
    try {
        const username = req.query.user
        const catName = req.query.cat
         
        let posts 
        if(username || catName){
            posts = await PostModel.find({username, categories: {$in: [catName]}})
            return res.status(200).json({user: posts})
        }
      const findUser = await PostModel.find();
      if (!findUser) {
        return res.status(404).json({ message: "This user is not found" });
      }
      return res.status(200).json({ message: "Successfully fetched", users: findUser});
    } catch (error) {
      return res.status(500).json({ message: console.log(error) });
    }
  };
