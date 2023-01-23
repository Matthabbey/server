import express from 'express'
import { CreateCategory } from '../controller/Category'
const router = express.Router()

router.post('/create', CreateCategory)
router.get('/getcat')



export default router
