import express from 'express'
import connect from "./config/mongodb"
import CarRouter from "./car/router"
import UserRouter from "./user/router"
const app = express()
import * as dotenv from 'dotenv';
import cors from "cors"

dotenv.config();
app.use(cors())
app.use(express.json());

app.use('/car', CarRouter)
app.use('/user', UserRouter)

connect()
app.listen(3000, () => { console.log("Server started at 3000") })






