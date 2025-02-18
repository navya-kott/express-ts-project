import { userCreation as create } from '../service/user_create';

export const userCreation = async (req: any,res:any) => {
    try {
       const response= await create(req.body)
       return res.json({
        response
       })

    } catch (error) {
        console.log(error);
    }

}
