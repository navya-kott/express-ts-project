import { Car } from "@/schema/car"
//OLDEST OF AL MODELS
export const vehicles = async () => {
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