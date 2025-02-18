import { Car } from "@/schema/car"

export const carList = async () => {
  try {
    return await Car.aggregate([
      { $match: { brand: 'Chevrolet' } },
      //{
      //   $group:
      //     {
      //       _id:"$brand",
      //       model: { $addToSet: "$model" }
      //     }
      // },
      { $sort: { brand: 1 } }
    ])
    // return await Car.find({brand:'Chevrolet' })
  } catch (error) {
    console.log(error);
  }
}