import { Car } from "@/schema/car"
// Get all cars that were registered in Houston after 2015.
export const vehicles = async (brand: String) => {
    try {
        return await Car.aggregate([
            { $match: { place: "Houston", year: { $gt: 2015 } } },
        ])

    } catch (error) {
        console.log("error", error);

    }
}