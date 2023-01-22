import express from 'express'
import { DeleteUser, GetUser, LoginUser, RegisterUser, UpdateUser } from '../controller'

const router = express.Router()
 router.post('/register', RegisterUser)
 router.get('/login', LoginUser)
 router.put('/:id', UpdateUser)
 router.delete('/:id', DeleteUser)
 router.get('/:id', GetUser)

 export default router