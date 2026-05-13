const { Article } = require("../../models/Article");
const { User } = require("../../models/User");

class  ArticleController{
  /* _______adding________ */
  async addarticle(req,res){
  try {
     console.log(req.body);
  const{title,content,categories,authorId }=req.body

 const author=await User.findById(authorId)
 const role=author.role
  if(role=='author'){
     const newArticle=await Article.insertOne({title,content,categories,authorId})
        return res.json({
    "message":"  article  is succesfully created",
    data:{
      title,content,categories,authorId 
    }
  })
  }
  else{
     return res.status(403).json({
    "message":"   not autoraze role ",})
  }
 
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
 
 
}
module.exports=new ArticleController