const express = require('express')
const app = express()
const path = require('path')

app.get('/dd',(req,res)=>{
  res.send('Hello World!dd')
})

// 执行前端静态页面
// if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/dist'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
  })
// }

const port = process.env.PORT || 5000;


app.listen(port,()=>{
  console.log(`Server running on  port ${port}`)
})