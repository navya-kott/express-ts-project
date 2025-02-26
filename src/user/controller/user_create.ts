import { generateJwtToken } from 'src/authentication/service/generate-token';
import { userCreation as create } from '../service/user_create';

export const userCreation = async (req: any, res: any) => {
    try {
        const response: any = await create(req.body)
        const token: any = await generateJwtToken({ userId: response.id, email: response.email, role: response.role, name: response.name })
    
        return res.json({
            message: "User created successfully",
            data: response,
            token
        })

    } catch (error) {
        console.log(error);
    }

}
