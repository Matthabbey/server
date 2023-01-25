import express from 'express'
import { CreatePost, DeleteUserPost, GetAllUserPosts, GetUserPost, UpdatePost } from '../controller/posts'

const router = express.Router()
 router.post('/create', CreatePost)
 router.put('/update/:id', UpdatePost)
 router.delete('/delete/:id', DeleteUserPost)
 router.get('/:id', GetUserPost)
 router.get('/', GetAllUserPosts)

 export default router