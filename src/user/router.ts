import express from 'express'
const router=express.Router()
import { userCreation } from './controller/user_create'

router.post("/",userCreation)

export default router