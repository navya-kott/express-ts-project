import {userList as users} from '../service/user_list';

export const userList = async (req: any,res:any) => {
    try {
       const response= await users()
       return res.json({
        response
       })

    } catch (error) {
        console.log(error);
    }

}
