import { listOfModelsByCar } from "../service/model-list-bybrand";

export const modelsListByBrand=async (req:any,res:any) => {
    try {
        const list=await listOfModelsByCar()
        
        return res.json({
            message:"Cars fetched successfully",
            data:list
        })
    } catch (error) {
        console.log(error);
        
    }
}