const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const SourceInfoSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  src_url:{
    type:String,
    required:true,
  },
  contact_way:{
    type:String,
    required:true,
  },
  wechat:{
    type:String,
    required:true,
  },
  facebook:{
    type:String,
    required:true,
  },
  collected:{
    type:Date,
    default:Date.now,
  },
})

module.exports = SourceInfo = mongoose.model('sourceInfo',SourceInfoSchema)