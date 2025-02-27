import { Car } from "@/schema/car"

export const fetchCarDetails = async (id: String) => {
    try {
        return await Car.findOne({ _id: id })
    } catch (error) {
        throw new Error("Car details fetching failed")
    }
}