const mongoose =require("mongoose")

const articleSchema=new mongoose.Schema({
  title:{type: String , required:true},
  content:{type: String , required:true},
  categories:{type:[String] ,enum:['Science','Art','Sports','Culture']},
   authorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})
const Article=mongoose.model(" Article",articleSchema)
module.exports = {Article}