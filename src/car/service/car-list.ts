import { Car } from "@/schema/car";

export const carList = async () => {
  try {
    return await Car.aggregate([
      { $sort: { year: -1 } },
      {
        $group: {
          _id: "$brand",
          model: { $first: "$model" },
          year: { $first: "$year" }
        }
      }
    ]);

  } catch (error) {
    console.error("Car listing failed:", error);
    throw new Error("Car listing failed");
  }
};
