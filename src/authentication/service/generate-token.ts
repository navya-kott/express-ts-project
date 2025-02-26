import jwt from "jsonwebtoken"

export const generateJwtToken = async (data: any) => {
    try {        
        const secret: any = process.env.JWT_SECRET
        const token = jwt.sign(data, secret)
        return token

    } catch (error) {
        console.log(error);
    }

}
