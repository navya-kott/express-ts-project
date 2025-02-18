import { User } from '@/schema/user'

export const userCreation=(name:any)=>{
    try {
        return User.create({
            name
        })
        
    } catch (error) {
        console.log(error);
        
    }

}
