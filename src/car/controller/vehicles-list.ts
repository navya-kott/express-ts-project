import { vehicles } from "../service/vehicles-list";

export const vehicleData = async (req: any, res: any) => {

    try {
        let { year } = req.query
        year= parseInt(year)
        const brand = await vehicles(year)
        
        return res.json({
            message: "Brand details fetched successsflly",
            data: brand
        })
    } catch (error) {
        console.log(error);

    }

}
