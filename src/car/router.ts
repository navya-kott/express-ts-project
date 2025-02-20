import express from 'express'
export const router = express.Router()
import { carlist } from './controller/car-list'
import { modelsListByBrand } from './controller/model-list-bybrand'
import { listModels } from './controller/model-list'

router.get("/", carlist)
router.get("/model-by-brand", modelsListByBrand)
router.get("/models", listModels)

export default router