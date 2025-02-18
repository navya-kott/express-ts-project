import express from 'express'
export const router=express.Router()
import { carlist } from './controller/car-list'

 export const CarRouter=router.get("/",carlist)

