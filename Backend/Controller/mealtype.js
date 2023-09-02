const MealTypes=require('../Models/mealtype')

exports.getAllmealtypes=(req,res)=>{
    MealTypes.find().then(
        result=>{
            res.status(200).json({
                message:"Location fetched successfully",
                data: result
            })

        }
    )
    .catch(
        e=>{
            res.status(500).json({
                message:" DB error",
                error: e
            })
            
        }
    )


   
}