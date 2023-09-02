
const express=require('express');
const restaurantRoutes=require('./Routes/restaurant');
const bodyparser=require('body-parser')
const locationRoutes=require('./Routes/location')
const mealtypeRoutes=require('./Routes/mealtype')
const menuRoutes=require('./Routes/menu')
const paymentRoutes=require('./Routes/payment')
// const userauthenticationroutes=require('./Routes/userauthentication');
const mongoose=require('mongoose')
const cors=require('cors')

//mongodb+srv://root:root@cluster1.6sempio.mongodb.net/Zomato
mongoose.connect("mongodb+srv://root:root@cluster1.6sempio.mongodb.net/Zomato");

mongoose.connection.on('connected', () => {
  console.log("mongodb connected");
});

mongoose.connection.on('error', (error) => {
  console.error("Error connecting to MongoDB:", error);
});

mongoose.connection.on('disconnected', () => {
  console.log("mongodb disconnected");
});


const PORT=process.env.PORT||6767;







var app=express()

app.use(bodyparser.json())
app.use(cors())
app.use('/restaurant',restaurantRoutes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealtypeRoutes)
app.use('/menu',menuRoutes)
app.use('/pay',paymentRoutes)
// app.use('/userauthentication',userauthenticationroutes)


//heroku configuration
if(process.env.NODE_ENV="production"){
  app.use(express.static("frontend/build"))
}


app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`)
})