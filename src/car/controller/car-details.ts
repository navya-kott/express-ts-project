import { fetchCarDetails as carDetails } from "../service/car-details";

export const fetchCarDetails = async (req: any, res: any) => {
    try {
        const { id } = req.params
        const response = await carDetails(id)
        return res.json({
            message: "Car details fetched successfully",
            data: response
        })
    } catch (error) {
        console.log("========", error);

    }
}