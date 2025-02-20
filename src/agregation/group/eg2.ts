
import { Car } from "@/schema/car"
// Count how many cars are there for each brand.

export const vehicles = async (brand: String) => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    _id: "$brand",
                    total_no_cars: { $sum: 1 }
                }
            }
        ])

    } catch (error) {
        console.log("error", error);

    }
}