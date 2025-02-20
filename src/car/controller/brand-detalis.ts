import { brandDetails } from "../service/brand-details";

export const brandData = async (req: any, res: any) => {

    try {
        const { name } = req.query
        const brand = await brandDetails(name)
        return res.json({
            message: "Brand details fetched successsflly",
            data: brand
        })
    } catch (error) {
        console.log(error);

    }

}
