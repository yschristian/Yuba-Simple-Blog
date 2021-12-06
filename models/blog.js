//objects that save out to the data store and do basic low level manipulations on your data
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

//create new instance Schema object
    const blogSchema = new Schema({
      
       title:{
          type:String,
          required:true
        },
       snippet:{
       type:String,
       required:true
       },
       body:{
       type:String,
       required:true

     }

    },{timestamps: true});

         const Blog =mongoose.model("Blog",blogSchema);
         module.exports =Blog;
