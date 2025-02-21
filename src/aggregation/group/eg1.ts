
import { Car } from "@/schema/car"
// Find the total number of vehicles registered in each city (place).

export const vehicles = async (brand: String) => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    _id: "$place",
                    place: { $sum: 1 }
                }
            }
        ])

    } catch (error) {
        console.log("error", error);

    }
}