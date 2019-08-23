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
    const param = {pagination:JSON.stringify(fields.pagination)}; // 解析分页参数

    // new Collection(fields).save().then(result=>{
    //   // res.json(result)
    // })

    Collection(fields).save().then(data=>{
      Collection.find()
        .then(result=>{
          if(!result){
            return res.status(404).json('没有任何内容')
          }
          res.json(paginationFilter(result,param))
        })
        .catch(err=>res.status(404).json(err)) 
    });
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

        const param = req.query

        // 模糊搜索
        if(param.querySearchField) {
          if(param.querySearchValue){ // 模糊查询(适用于实时动态,大数据量的情况)
            const name = param.querySearchValue
            const data = result.filter((item)=>item.name.indexOf(name) >= 0)
            res.json({
              results:data.map(item=>{return {value:item.name}})
            })
          }else{ // 加载全部（适用于静态首次查询，,少量数据的情况）
            res.json({
              results:result.map(item=>{return {value:item[param.querySearchField]}})
            })
          }
        }
        // 筛选
        else if(param.filterFields) {
          const filterFields = JSON.parse(param.filterFields)
          let items = result
          if(filterFields.name){ 
            const name = filterFields.name
            items = items.filter((item)=>item.name.indexOf(name) >= 0)
          }
          if(filterFields.collected__date__gte){
            const startTime = (new Date(filterFields.collected__date__gte)).getTime();
            items = items.filter((item)=>(new Date(item.collected)).getTime() >= startTime)
          }
          if(filterFields.collected__date__lte){
            const endTime = (new Date(filterFields.collected__date__lte)).getTime();
            items = items.filter((item)=>(new Date(item.collected)).getTime() <= endTime)
          }

          res.json(paginationFilter(items,param))
        }
        // 全部返回
        else { 
          res.json(paginationFilter(result,param))
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


function paginationFilter(result, param){ // 分页处理参数
  if(param.pagination){
    const pagination = JSON.parse(param.pagination)
    const total = result.length // 总条数
    const index_start = pagination.page_size * (pagination.page_index-1) // 当前页码起始索引
    let index_end = pagination.page_size * pagination.page_index; // 当前页码结束索引
    index_end = (total > index_end) ? index_end : total;
    // 分页容器
    const results = result.slice(index_start,index_end)
    // 分页总条数
    pagination.total = total
    return {
      results,
      pagination
    }
  }
}