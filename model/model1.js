const mongoose = require("mongoose");

const notesSchema = {
  title: {
    type:String,
    required: true
  },
  content: {
    type:String,
    required: true
  },
  Username:{
    type:String,
    required: true
  },
  url:{
    type:String,
    required: true
  },
  price:{
    type:String,
    required: true
  },
  cont:{
        type:String,
        required: true
  },
  Id:{
    type:String,
    required: true,
    unique: true
  }
};

const Note = mongoose.model("OfficialContent", notesSchema);

module.exports = Note;
