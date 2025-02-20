import express from 'express'
export const router=express.Router()
import { carlist } from './controller/car-list'
import { modelsListByBrand } from './controller/model-list-bybrand'

router.get("/",carlist)
router.get("/model-by-brand",modelsListByBrand)

export default router