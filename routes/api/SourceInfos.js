// @login & register
const express = require('express')
const router = express.Router()

// 创建集合
const Collection = require('../../models/SourceInfo')

// 增
// $router POST api/sourceInfos
// @desc 返回请求的json数据
// @access public
router.post(
  '/',
  (req,res)=>{
    // console.log('req.body:',req.body)
    const fields = req.body

    new Collection(fields).save().then(result=>{
      res.json(result)
    })
  }
)

// 删
// $router DELETE api/sourceInfos/:id
// @desc 返回请求的json数据
// @access public
router.delete(
  '/:id',
  (req,res)=>{
    Collection.findOneAndRemove({_id:req.params.id})
      .then(result=>res.json(result)) // *** 尝试：简化暂时可行，未发现问题
      // .then(item=>{
      //   res.json(item)
      //   item=>res.json(item)
      //   item
      //     .save()
      //     .then(
      //       item=>res.json(item)
      //     )
      // })
      .catch(err=>res.status(404).json('删除失败'))
  }
)

// 改
// $router DELETE api/sourceInfos/:id
// @desc 返回请求的json数据
// @access public
router.patch( // 单条
  '/:id',
  (req,res)=>{
    Collection.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {new: true},
      )
      .then(result=>{
        res.json(result)
      })
  }
)

// 查
// $router GET api/sourceInfos
// @desc 返回请求的json数据
// @access public
router.get( // 全部
  '/',
  (req,res)=>{
    Collection.find()
      .then(result=>{
        if(!result){
          return res.status(404).json('没有任何内容')
        }

        // 模糊搜索
        if(req.query.name) {
          const name = req.query.name
          const data = result.filter((item)=>item.name.indexOf(name) >= 0)
          res.json({
            result:data.map(item=>item.name)
          })
        }
        // 全部返回
        else { 
          const data = {
            result
          }
          res.json(data)
        }
      })
      .catch(err=>res.status(404).json(err))
  }
)
router.get( // 单条
  '/:id',
  (req,res)=>{
    Collection.findOne({_id:req.params.id})
      .then(result=>{
        if(!result){
          return res.status(404).json('没有任何内容')
        }
        res.json(result)
      })
      .catch(err=>res.status(404).json(err))
  }
)

// test
// $router GET api/sourceInfo/test
// @desc 返回请求的json数据
// @access public
router.get(
  '/test',
  (req,res)=>{
    res.json(
      {
        msg: 'sourceInfos works',
      }
    )
  }
)
module.exports = router