import { User } from '@/schema/user'

export const userCreation=async (params:any)=>{
    try {
        console.log("=================:",params);
        
        return await User.create( params )
        
    } catch (error) {
        console.log(error);
        
    }

}
