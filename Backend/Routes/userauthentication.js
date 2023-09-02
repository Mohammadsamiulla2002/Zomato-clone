const express=require('express');
const userauthentication_controller=require('../Controller/userauthentication');

const router=express.Router();

router.post('/auth',userauthentication_controller.getuserauthentication())




module.exports=router;