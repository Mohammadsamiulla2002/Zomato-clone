const mongoose=require('mongoose')


const transactionschema=new mongoose.Schema({
    transaction_id:{
        type:String
    },
    transaction_amount:{
        type:String
    }
})








module.exports=mongoose.model('Transactions',transactionschema,'transactions')
