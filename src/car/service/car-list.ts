import { Car } from "@/schema/car"

export const carList = async () => {
  try {
    return await Car.aggregate([
      {
        $group: {
          _id: "$brand",
          model: { $first: "$model" },
          year: { $first: "$year" }
        }
      },
      {
        $project: {
          _id: 1,
          model: 1,
          year: 1
        }
      },
      { $sort: { year: -1 } }
    ])
  } catch (error) {
    return new Error('Car listing failed')
  }
};
