import express from 'express'
export const router = express.Router()
import { carlist } from './controller/car-list'
import { modelsListByBrand } from './controller/model-list-bybrand'
import { listModels } from './controller/model-list'
import { brandData } from './controller/brand-detalis'
import { vehicleData } from './controller/vehicles-list'
import { registerCarDetails } from './controller/car-registration'

import multer from "multer"
import { fetchCarDetails } from './controller/car-details'
import  {authenticator}  from 'src/middleware/token'
const upload = multer()

router.get("/", carlist)
router.get("/model-by-brand", modelsListByBrand)
router.get("/models", listModels)
router.get("/brand/", brandData)
router.get("/vehicle", vehicleData)
router.post("/",authenticator, upload.single('file'), registerCarDetails)
router.get("/:id", fetchCarDetails)
export default router