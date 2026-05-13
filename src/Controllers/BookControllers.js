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
/* _____updating book ________ */
 
 async updatebooks(req,res){
  try {
  console.log(req.body);
  const bookId=req.params.id
  const{title,description,articleId }=req.body
  const bookUpdate=await Book.updateOne({ _id: bookId },{title , description,articleId})

  res.json({
    "message":"  Book is succesfully  updated",
    data:{
      title,description,articleId
    }
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
/* _________delete book____________ */
async deletebooks(req,res){
  try {
  console.log(req.body);
  const bookId=req.params.id
  const bookUpdate=await Book.deleteOne({ _id: bookId })

  res.json({
    "message":"  Book is succesfully  deleted",
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}

}
module.exports=new BookController