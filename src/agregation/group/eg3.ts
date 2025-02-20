
import { Car } from "@/schema/car"
// Calculate the average number value for each brand.

export const vehicles = async (brand: String) => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    _id: "$brand",
                    number: { $avg: "$number" }
                }
            }
        ])

    } catch (error) {
        console.log("error", error);

    }
}