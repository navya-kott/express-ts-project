import { Car } from "@/schema/car"
// // VEHICLES IN DESCENDING ORDER

export const vehicles = async (brand: String) => {
    try {

        return await Car.aggregate([
            {$sort:{year:-1}},
        ])

    } catch (error) {
        console.log("error", error);

    }
}