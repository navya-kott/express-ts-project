import { carList } from "../service/car-list";

export const carlist=async (req:any,res:any) => {
    try {
        const list=await carList()
        console.log(list);
        
        return res.json({
            message:"Car list fetched successfully",
            data:list
        })
    } catch (error) {
    }
}