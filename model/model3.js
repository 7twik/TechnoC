const mongoose = require("mongoose");

const PostSchema = {
  Username:{
    type:String,
    required: true    
  },
  Id:{
    type:Number,
    required: true
  }
};


const Posts = mongoose.model("OfficialLogin", PostSchema); //collection name, schema

module.exports = Posts;