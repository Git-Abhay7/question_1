const express = require("express")
const bodyParser=require("body-parser")
const app = express();
const port = 7000;
require("./dbConnection/connection")


const userRoute= require("./routes/userRoutes")
const profileRoute = require("./routes/profileRoute")
app.get('/',(req,res)=>{
    res.send("<h1>SERVER IS RUNNING SMOOTHLY </h1>")
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/user",userRoute)
app.use("/userProfile",profileRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})