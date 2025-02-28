import { carListByUserId as carList } from "../service/car-list-by-userId";

export const carListByUserId = async (req: any, res: any) => {
    try {
        const { userId } = req.user
        const list = await carList(userId)

        return res.json({
            message: "Car list fetched successfully",
            data: list
        })
    } catch (error) {
        console.log(error);
    }
}