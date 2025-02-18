import { Car } from "@/schema/car"

export const carList = async () => {
  try {
    return await Car.aggregate([
      { $match: { brand: 'Chevrolet' } },
      // {
      //   $group:
      //     {
      //       _id:"$brand",
      //       model: { $addTSet: "$model" }
      //     }
      // },
      { $sort: { brand: 1 } }
    ])
    // return await Car.find({brand:'Chevrolet' })
  } catch (error) {
    return new Error('Car listing failed')
  }
}