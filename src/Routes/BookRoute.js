const express=require("express");
const router =express.Router();
 
 
const BookControllers = require("../Controllers/BookControllers");

router.post("/book", BookControllers.addbooks)
router.put("/book/:id",BookControllers.updatebooks)
router.delete("/book/:id",BookControllers.deletebooks)
router.get("/book/article/:articleId",BookControllers.gettingAllBooksOfAnArticle)

module.exports= router;