import { Car } from "@/schema/car"

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