const express=require("express")
const app =express()


require("dotenv").config();
const port =process.env.PORT || 5000  


const  userRoute=require("./src/Routes/UserRoute")
const  bookRoute=require("./src/Routes/BookRoute")
const  articleRoute=require("./src/Routes/ArticlesRoute")

const connectDB = require("./src/config/db");

connectDB()
app.use(express.json()) 

app.use("/user",userRoute)
app.use("/books",bookRoute)
app.use("/articles",articleRoute)

 
 

app.listen(port,()=>{
  console.log("serveur is running on  port"+port)
})
