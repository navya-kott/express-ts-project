import { Car } from "@/schema/car";

export const modelList = async () => {
  try {
    const result = await Car.aggregate([
      { $sort: { date: -1, model: 1 } },
      {
        $group: {
          _id: "$brand",
          models: { $first: "$model" }
        }
      },
      {
        $group: {
          _id: null,
          allModels: { $addToSet: "$models" } 
        }
      },

    ]);
    return result[0]?.allModels || [];
  } catch (error) {
    return new Error("Car listing failed");
  }
};
