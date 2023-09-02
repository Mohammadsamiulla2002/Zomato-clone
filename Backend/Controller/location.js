const Locations=require('../Models/location')

exports.getAlllocations=(req,res)=>{
    Locations.find().
    then(
        result=>{
            res.status(200).json({
                message:"Location fetched successfully",
                data: result
            })

        }
    )
    .catch(
        error=>{
            res.status(500).json({
                message:" DB error",
                error: error
            })
            
        }
    )


   
}