import { Car } from "@/schema/car"
// CARS LESS OLDER THAN A PARTICULAR YEAR
export const vehicles = async (y: String) => {
    try {
        return await Car.aggregate([
            {
                $match: {
                    year: { $lt: y },
                }
            },
        ])

    } catch (error) {
        console.log("error", error);
    }
}