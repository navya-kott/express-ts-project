import { Car } from "@/schema/car"

export const carListByUserId = async (userId: String) => {
    try {
        return await Car.find({ userId })
    } catch (error) {
        throw new Error("Car listing failed")
    }
}