import express from "express";
import dotenv from 'dotenv'
import connectMongoDB from "./config";
import authRouter from './routes/index'
import postRouter from './routes/posts'
import catRouter from './routes/category'

import logger from 'morgan'
dotenv.config()


connectMongoDB()
const app = express()
app.use(express.json())
app.use(logger("dev"))
app.use(express.urlencoded( { extended: true}))


app.use('/api/post', postRouter)
app.use('/api/user', authRouter)
app.use('/api/cat', catRouter)

app.listen("5000", ()=>{
    console.log("Server is running here")
})