import express from 'express'
import  connect  from "./config/mongodb"
import {router as CarRouter} from "./car/router"
const app = express()
import * as dotenv from 'dotenv';
import cors from "cors"

dotenv.config();
app.use(cors())
app.use(express.json());

app.use('/cars',CarRouter)
connect()
app.listen(3000, () => { console.log("Server started at 3000") })






