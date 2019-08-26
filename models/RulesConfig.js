const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const RulesConfigSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  source_info:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  is_two_layers:{
    type:String,
    required:true,
  },

  page_type:{
    type:String,
    required:true,
  },
  src_url:{
    type:String,
    required:true,
  },
  restrict_xpath:{
    type:String,
    required:true,
  },
  allow:{
    type:String,
    required:true,
  },
  title_xpath:{
    type:String,
    required:true,
  },
  content_xpath:{
    type:String,
    required:true,
  },

  api_url:{
    type:String,
    required:true,
  },
  remarks:{
    type:String,
    default:'',
  },

  collected:{
    type:Date,
    default:Date.now,
  },
})

module.exports = RulesConfig = mongoose.model('rulesConfig',RulesConfigSchema)