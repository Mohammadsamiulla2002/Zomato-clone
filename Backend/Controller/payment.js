const Razorpay=require('razorpay')
const crypto=require('crypto')
const shortid=require('shortid')
const Transactions=require('../Models/transaction')


const instance=new Razorpay({
    key_id:"rzp_test_zk8PbeWKoFgQp3",
    key_secret:"HzwLu4noIXVGHFt6DovM1DNe"
})




exports.createorder=async (req,res)=>{
    console.log("Payment initiated")
    const options={
        amount:req.body.amount*100,  //converting paise to rupees
        currency: "INR",
        receipt: shortid.generate(),
        notes: {
            key1: "value3",
            key2: "value2"
          }
    }

   

try{
    const response=await instance.orders.create(options)
console.log(response)
res.json(response)
}catch(error){
    console.log(error)
}


}

exports.savetransaction = async (req, res) => {
    const generate_signature = crypto.createHmac('sha256', instance.key_secret);
    generate_signature.update(req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id);

    if (req.body.razorpay_signature === generate_signature.digest('hex')) {
        try {
            // Create a new transaction document
            const transaction = new Transactions({
                transaction_id: req.body.razorpay_payment_id,
                transaction_amount: req.body.razorpay_amount
            });

            // Save the transaction to the database
            const savedTransaction = await transaction.save();

            console.log("Transaction saved to the database:", savedTransaction);
            res.send({ transaction: savedTransaction });
        } catch (error) {
            console.error(error);
            res.status(500).send("Some problem occurred while saving the transaction.");
        }
    } else {
        res.status(400).send("Invalid Razorpay signature.");
    }
}

