const { User } = require("../../models/User");

class   UserController{
  /* _______ register_______ */
  async  register(req,res){
  try {
     console.log(req.body);
  const{ name,email,password,role  }=req.body

  const newUser=await User.insertOne({ name, email,password,role})
  res.json({
    "message":"  Author is register  ",
    data:newUser
       
    
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
  /* ___________ login _______ */
  async login(req, res) {
    try {
      const { email,password}=req.body
      const  user=await User.findOne({email,password})
      if(!user){
        return  res.status(404).json("user not found ")
      }
      const logged_at=Date.now()
      await User.updateOne({email},
      {logged_at}
      )
      user.logged_at=logged_at
      res.status(200).json({
        "message":" user succsesfuly login",
          data:user
      })

    } catch (error) {
      console.log(error)
        res.status(500).json(error.message)
    }
  }
  

  
}
module.exports=new  UserController