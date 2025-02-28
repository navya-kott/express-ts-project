import { carRegistration } from "../service/car-registration";

export const registerCarDetails = async (req: any, res: any) => {
    try {
        const {userId}=req.user
        const { brand, model, year, place, number } = req.body
        const params = {
            image: req.file.buffer,
            brand, model, year, place, number,
            userId
        }
        const response = await carRegistration(params)

        return res.json({
            message: "Car registration successfull",
            data: response
        })
    } catch (error) {
        console.log(error);

    }
}