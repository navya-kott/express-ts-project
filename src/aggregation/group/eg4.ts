
import { Car } from "@/schema/car"
// Find the newest and oldest vehicle for each brand.

export const vehicles = async () => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    _id: "$brand",
                    oldest: { $min: "$year" },
                    newest: { $max: "$year" }
                }
            }
        ])

    } catch (error) {
        console.log("error", error);

    }
}