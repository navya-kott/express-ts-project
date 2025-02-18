import { userCreation as create } from '../service/user_create';

export const userCreation = (req: any) => {
    try {
        const { name } = req.body
       const response= create(name)

    } catch (error) {
        console.log(error);
    }

}
