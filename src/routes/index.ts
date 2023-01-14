import express from 'express'
import { LoginUser, RegisterUser } from '../controller'

const router = express.Router()
 router.post('/register', RegisterUser)
 router.get('/login', LoginUser)

 export default router