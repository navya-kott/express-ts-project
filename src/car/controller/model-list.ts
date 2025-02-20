import { modelList } from "../service/model-list";

export const listModels=async (req:any,res:any) => {
    try {
        const list=await modelList()
        
        return res.json({
            message:"Car list fetched successfully",
            data:list
        })
    } catch (error) {
    }
}