import { Car } from "@/schema/car"
//OLDEST OF CERTAIN MODEL
export const vehicles = async (y: String) => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    _id: "$model",
                    year: { $min: "$year" }
                },
            },

        ])

    } catch (error) {
        console.log("error", error);
    }
}