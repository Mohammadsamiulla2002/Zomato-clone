const express=require('express');
const menuController=require('../Controller/menu')
const router=express.Router();



router.get('/:rName',menuController.getMenuByRestaurants)



module.exports=router;