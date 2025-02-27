import { Car } from "@/schema/car"

export const carRegistration = async (params: any) => {
    try {
        return await Car.create(params)
    } catch (error) {
        console.log("error", error);

    }
}