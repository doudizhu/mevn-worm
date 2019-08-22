const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// 引入api
const sourceInfos = require('./routes/api/sourceInfosTemp')

const db = require('./config/keys').mongoURI
console.log(db)
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
    )
  .then(()=>{console.log('MongoDB Connected')})
  .catch(err=>console.log(err))

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

// 使用body-parser中间件
// ***注意:需要放在接口调用之前，否则数据为undifine
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
// 设置允许跨域
app.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE',

    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type,Access-Token",
    "Access-Control-Expose-Headers": "*",
  });
  next();
})

// 使用routes
app.use('/api/sourceInfos',sourceInfos)


// 执行前端静态页面
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/dist'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
  })
}

const port = process.env.PORT || 5000;


app.listen(port,()=>{
  console.log(`Server running on  port ${port}`)
})