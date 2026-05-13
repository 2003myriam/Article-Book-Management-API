const mongoose =require("mongoose")

const bookSchema=new mongoose.Schema({
  title:{type: String , required:true},
  description:String,

   articleId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Article"
  }
})
const Book=mongoose.model("Book",bookSchema)
module.exports = {Book}