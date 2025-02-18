import express from 'express'
export const router=express.Router()
import { carlist } from './controller/car-list'

router.get("/",carlist)

export default router