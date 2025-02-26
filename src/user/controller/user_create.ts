import { generateJwtToken } from 'src/authentication/service/generate-token';
import { userCreation as create } from '../service/user_create';

export const userCreation = async (req: any, res: any) => {
    try {
        const response: any = await create(req.body)
        const token = await generateJwtToken(response.email)
        
        return res.json({
            message:"User created successfully",
            data: response,
            token
        })

    } catch (error) {
        console.log(error);
    }

}
