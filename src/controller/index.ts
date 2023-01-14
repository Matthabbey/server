import express, {Request, Response}from 'express'
import { UserModel } from '../model/Users'

export const RegisterUser = async (req: Request, res: Response) =>{
    try {
        const {username, email, password} = req.body
        const newUser = new UserModel({
            username, email, password
        })
        const user = await newUser.save()
        res.status(201).json({message: "Account successfully created", user})
    } catch (error) {
        res.status(500).json({message: console.log(error)
        })
    }
}