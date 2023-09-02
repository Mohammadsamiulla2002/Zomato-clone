const MenuTypes=require('../Models/menu')

exports.getMenuByRestaurants=(req,res)=>{
    let filter={
        restaurantName:req.params.rName
    }
    MenuTypes.find(filter).then(
        result=>{
            res.status(200).json({
                message:"Menu fetched successfully",
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