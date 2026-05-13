const { Book } = require("../../models/Book");

class  BookController{
  /* _______adding________ */
  async addbooks(req,res){
  try {
     console.log(req.body);
  const{title,description,articleId }=req.body

  const newbook=await Book.insertOne({title,description,articleId})
  res.json({
    "message":"  Book is succesfully created",
    data:{
      title,description,articleId
    }
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
 
 
}
module.exports=new BookController