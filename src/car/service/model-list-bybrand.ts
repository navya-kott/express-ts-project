import { Car } from "@/schema/car"

export const listOfModelsByCar = async () => {
    try {
        return await Car.aggregate([
            {
                $group: {
                    "_id": "$brand",
                    "model": {
                        "$addToSet": "$model"
                    }
                }
            },

        ])
    } catch (error) {
        return new Error('Car listing failed')
    }
};
