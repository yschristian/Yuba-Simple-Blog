const express = require("express");
const partials = require('express-partials');
const morgan = require("morgan");
const mongoose = require("mongoose");
const result = require("lodash");
const { findById } = require("./models/blog");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");


  const app = express();
  //connect mongo db
//  const dbURI ="mongodb+srv://chris:chris@cluster0.k1npp.mongodb.net/blog-news?retryWrites=true&w=majority"
const dbURI = "mongodb://localhost:27017/blog-news"
   mongoose.connect(dbURI)
   .then((result)=>app.listen(3000))
   .catch((err)=>console.log(err));

   app.use(partials());

      /* a method inbuilt in express to recognize 
     the incoming Request Object as strings or arrays*/

   app.use(express.urlencoded({extended:true}));
   app.use(morgan('dev'));

  //  app.get('/add-blog',(req,res)=>{
     
  //  const blog =new Blog({
  //   title: "Salutation",
  //   snippet:"Hello cute girls on the internet :)",
  //   body:"This is my new blog boys"
  
  //  });
  
  // //  this is how to save data in database
  // // we use an instance to save
  //  blog.save()
  //   .then((result)=>{
  //   res.send(result)
  
  //  })
  //  .catch((err)=>{
  //    console.log(err)
  //  })
  
  // })

// register view engine
   app.set("view engine","ejs");

//listener for request
   app.use(express.static('public'));

     
app.get('/about',(req,res)=>{

    res.render('about');
});

app.use(blogRoutes);

app.use((req,res)=>{
    res.status(404).render("404");
});