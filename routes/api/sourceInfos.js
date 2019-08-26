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
          res.json({
            results:arrObjSearch(result,param.querySearchField,param.querySearchValue)
          })
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

// 模糊搜索
function arrObjSearch (arrObj,searchField,searchValue) {
  const result = [] // 集合结果
  const set = new Set() // set去重
  
  for(const item of arrObj){
      const itemValue = item[searchField] //当前条目值
      if(
          itemValue.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 // 当前条目值，含有搜索值
          && !set.has(itemValue) // 且当前条目值，未被重复添加
      ){
          set.add(itemValue)
          result.push({
              value: itemValue,
          })   
      }
  }
  return result 
}
