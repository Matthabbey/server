import express, {Request, Response}from 'express'
import { UserInstance, UserModel } from '../model/Users'
import bcrypt from 'bcrypt'

export const RegisterUser = async (req: Request, res: Response) =>{
    try {
        const {username, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const check = await UserModel.findOne({email})
        if(check){
            return res.status(400).json({message: "User already exist, choose another email or user name"})
        }
        const newUser = new UserModel({
            username, email, password: hash
        })
        const user = await newUser.save()
        res.status(201).json({message: "Account successfully created", user})
    } catch (error) {
        res.status(500).json({message: console.log(error)
        })
    }
}


export const LoginUser = async (req: Request, res: Response) =>{
    try {
        const {email, ...others} = req.body

        const findUser = await UserModel.findOne({ email: email })
        if(findUser !== null){
        const validateUser = await bcrypt.compare(others.password, findUser.password)
         if(!validateUser) return res.status(400).json({message: "Wrong Credentials"})
        }
        else
        return res.status(400).json({message: "Wrong Credentials"})
        const { password, ...other} = findUser
        return res.status(200).json({message: other})
    } catch (error) {
        res.status(500).json({message: console.log(error)
        })
    }
}

export const UpdateUser = async (req: Request, res: Response) =>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash
        }

        try {
            const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
                
            }, {new: true})
            return res.status(200).json({message: "Succssfully updated", updateUser})
        } catch (error) {
        return res.status(500).json({message: console.log(error)
        })
        }
    }else {
        res.status(400).json({message: "You can only update your account!!"})
    }
}

export const DeleteUser = async (req: Request, res: Response) =>{
    try {
        const deleteOne = await UserModel.findByIdAndDelete(req.params.id)
        if (!deleteOne) {
            return res.status(404).json({
              message: "This item has been deleted",
            });
          }
          return res.status(200).json({
            message: "You have successfully deleted this User",
          });
    } catch (error) {
        return res.status(500).json({message: console.log(error)})
    }
}

export const GetUser = async (req: Request, res: Response) =>{
    try {
        const userId = req.params.id
        const findUser = await UserModel.findById(userId)
        // const { password, ...others } = findUser
        console.log(findUser)
        return res.status(200).json({message: "Successfully fetched", findUser})
    } catch (error) {
        return res.status(500).json({message: console.log(error)})
        
    }
}