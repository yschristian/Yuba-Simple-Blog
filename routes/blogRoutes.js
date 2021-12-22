const express = require("express")
const router = express.Router();
const Blog = require("../models/blog");

   router.get('/',(req,res)=>{

     Blog.find().sort({ createdAt: -1 })
     .then((result)=>{
      
      res.render('news',{blogs:result})
  })

   .catch((err)=>{
 console.log(err)
    })
    
   });

   router.get('/blog',(req,res)=>{

    res.render('blog');
 });
      router.post('/news',(req,res)=>{

      const blog = new Blog(req.body);

      blog.save()

     .then((result)=>{

      res.redirect('/news');
   })

      .catch((err)=>{
      console.log(err);
     })

  })

  router.get('/blogss/:id',(req,res)=>{
  const id =req.params.id
   Blog.findById(id)

   .then((result)=>{
     res.render("details", {blog:result});

   })
       .catch((err)=>{
         console.log(err)
       })
  })

  // router.delete('/blogss/:id', (req, res) => {
  //   const id = req.params.id;
    
  //   Blog.findByIdAndDelete(id)
  //     .then(result => {
  //       res.json({ redirect: '/blogss' });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

module.exports = router;


// router.get('/',{ blogController.blog_index });
  // router.get('/blog',{ blogController.blog_create_get });
  // router.post('/news',{blogController.blog_create_post});
  // router.get('/blogss/:id',{ blogController.blog_details });
  //testing

