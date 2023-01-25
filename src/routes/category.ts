import express from 'express'
import { CreateCategory, GetCategory } from '../controller/Category'
const router = express.Router()

router.post('/create', CreateCategory)
router.get('/get',  GetCategory)



export default router
