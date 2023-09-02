const express=require('express');
const mealtypeController=require('../Controller/mealtype')
const router=express.Router();



router.get('',mealtypeController.getAllmealtypes)



module.exports=router;