import { carRegistration } from "../service/car-registration";

export const registerCarDetails = async (req: any, res: any) => {
    try {
        const { brand, model, year, place, number } = req.body
        const params = {
            image: req.file.buffer,
            brand, model, year, place, number
        }

        console.log("========",params);
        
        const response = await carRegistration(params)

        return res.json({
            message: "Car registration successfull",
            data: response
        })
    } catch (error) {
        console.log(error);

    }
}