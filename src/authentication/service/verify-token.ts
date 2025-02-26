import jwt from "jsonwebtoken"

export const verifyToken = async (token: any) => {
    try {
        const secret: any = process.env.JWT_SECRET
        const data = jwt.verify(token, secret)
        return data
    } catch (error) {
        console.log(error);
    }
}
