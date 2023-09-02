const express=require('express');
const paymentController=require('../Controller/payment')
const router=express.Router();



router.post('',paymentController.createorder)
router.post('/save',paymentController.savetransaction)



module.exports=router;