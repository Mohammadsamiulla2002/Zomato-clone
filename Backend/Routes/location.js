const express=require('express');
const locationController=require('../Controller/location')

const router=express.Router();


router.get('',locationController.getAlllocations)
//router.get('/:cName',restaurantcontroller.getrestaurantsbycity)


//router.post('',restaurantcontroller.addrestaurant)
//router.put('',restaurantcontroller.updatarestaurant)
//router.delete('/:id',restaurantcontroller.deleterestaurant)

module.exports=router;
