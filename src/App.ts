import express from "express";
import dotenv from 'dotenv'
import connectMongoDB from "./config";
import authRouter from './routes/index'
import loginRouter from './routes/index'
import logger from 'morgan'
dotenv.config()


connectMongoDB()
const app = express()
app.use(express.json())
app.use(logger("dev"))

app.use('/api/user', authRouter)
app.use('/api/user', loginRouter)

app.listen("5000", ()=>{
    console.log("Server is running here")
})