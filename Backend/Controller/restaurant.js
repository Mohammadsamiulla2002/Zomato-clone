//const restaurant=require('../Models/restaurant.json');

const Restaurants=require('../Models/restaurant')


exports.getAllrestaurants=(req,res)=>{
    Restaurants.find().
    then(
        result=>{
            res.status(200).json({
                message:"restaurant fetched successfully",
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

exports.getrestaurantsbycity=(req,res)=>{
   let criteria={city:req.params.cName}

    Restaurants.find(criteria).
    then(
        result=>{
            res.status(200).json({
                message:"location fetched successfully",
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

exports.getrestaurantbydetails=(req,res)=>{

    let criteria={
         name:req.params.name
    }

    Restaurants.findOne(criteria).
    then(
        result=>{
            res.status(200).json({
                message:"location fetched successfully",
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

exports.getallrestaurantsbyfilter = async (req, res) => {
    try {
      let filter = {};
  
      if (req.body.city_id) {
        filter.city = req.body.city_id;
      }
  
      if (req.body.cuisine && req.body.cuisine.length > 0) {
        filter['Cuisine.name'] = { $in: req.body.cuisine };
      }
  
      if (req.body.lcost !== '' && req.body.lcost == 0) {
        filter.cost = { $lte: req.body.hcost };
      } else if (req.body.lcost && req.body.hcost) {
        filter.cost = {
          $lt: req.body.hcost,
          $gt: req.body.lcost,
        };
      }
  
      let sort = 1;
      if (req.body.sort) {
        sort = req.body.sort;
      }
  
      // Use async/await for cleaner code
      const result = await Restaurants.find(filter)
        .limit(2)
        .skip(2 * (parseInt(req.params.pageNo) - 1))
        .sort({ cost: sort });
  
      const count = await Restaurants.find(filter).count();
  
      res.status(200).json({
        message: "Location fetched successfully",
        data: result,
        totalRecords: count,
      });
    } catch (error) {
      console.error("DB error:", error);
      res.status(500).json({
        message: "DB error",
        error: error.message,
      });
    }
  };
  
  









exports.addrestaurant=(req,res)=>{
    Restaurants.push(req.body)
    res.status(200).json({
        message:"restaurant added successfully",
        data: Restaurants
    })
}

exports.updatarestaurant=(req,res)=>{
    const index=Restaurants.findIndex((item)=>item.name==req.body.name)
    Restaurants[index].city=req.body.city

    res.status(200).json({
        message:"restaurant updated successfully",
        data: Restaurants
    })
}

exports.deleterestaurant=(req,res)=>{
    const index=Restaurants.findIndex((item)=>item.id==req.params.id)
    Restaurants.splice(index,1)

    res.status(200).json({
        message:"Message deleted successfully",
        data:Restaurants
    })
}