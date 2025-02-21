import { Car } from "@/schema/car"
// TOP 3 MILEAGE VEHICLES
export const vehicles = async (brand: String) => {
    try {

        return await Car.aggregate([
            { $sort: { number: -1 } },
            { $limit: 3 }
        ])

    } catch (error) {
        console.log("error", error);

    }
}