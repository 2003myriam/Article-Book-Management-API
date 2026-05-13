const express=require("express");
const router =express.Router();
 
 
const ArticlesControllers = require("../Controllers/ArticleControllers");

router.post("/article",  ArticlesControllers.addarticle)
 

module.exports= router;