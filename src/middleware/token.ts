import { Request, Response, NextFunction } from "express"
import { verifyToken } from "src/authentication/service/verify-token"

export const authenticator = async (req: any, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) return "No aothentication found"

        const token = authHeader.split(" ")[1]

        const decoded = await verifyToken(token)
        if (!decoded) return "Invalid token"
        console.log(decoded);
        req['user'] = decoded

        next()

    } catch (error: any) {
        return error
    }
}
