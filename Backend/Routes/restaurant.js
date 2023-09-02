const express=require('express');
const restaurantcontroller=require('../Controller/restaurant')

const router=express.Router();


router.get('',restaurantcontroller.getAllrestaurants)
router.get('/:cName',restaurantcontroller.getrestaurantsbycity)
router.post('/filter/:pageNo',restaurantcontroller.getallrestaurantsbyfilter)
router.get('/details/:name',restaurantcontroller.getrestaurantbydetails)


router.post('',restaurantcontroller.addrestaurant)
router.put('',restaurantcontroller.updatarestaurant)
router.delete('/:id',restaurantcontroller.deleterestaurant)

module.exports=router;
