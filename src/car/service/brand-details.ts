import { Car } from "@/schema/car"

export const brandDetails = async (brand: String) => {
    try {

        return await Car.aggregate([
            { $match: { brand } }
        ])

    } catch (error) {
        console.log("error", error);

    }
}