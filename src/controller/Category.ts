import express, {Request, Response}from 'express'
import { CategoryModel } from "../model/Categories";


export const CreateCategory = async (req: Request, res: Response) => {
    try {
      const newCat = new CategoryModel(req.body);
      
      const savedCat = await newCat.save();
      return res.status(201).json({ msg: "Successfully created", savedCat });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: console.log(error) });
    }
  };

  export const GetCategory = async (req: Request, res: Response) => {
    try {
      const AllCategories = await CategoryModel.find();
      return res.status(201).json({ msg: "Successfully created", AllCategories });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: console.log(error) });
    }
  };