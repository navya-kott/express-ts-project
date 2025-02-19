import express from 'express'
const router=express.Router()
import { userList} from './controller/user-list'
import { userCreation} from './controller/user_create'

router.post("/",userCreation)
router.get("/",userList)


export default router