import express from "express";
import dotenv from 'dotenv'
import connectMongoDB from "./config";
import logger from 'morgan'
dotenv.config()


connectMongoDB()
const app = express()
app.use(express.json())
app.use(logger("dev"))

app.listen("5000", ()=>{
    console.log("Server is running here")
})