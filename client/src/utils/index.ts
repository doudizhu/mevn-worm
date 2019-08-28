/**
 * 去抖
 * *待优化：为可传参形式
 * @param {*} fn // 回调方法
 * @param {*} delay // 延迟执行时间
 */
export function debounce (fn:any, delay=400) {
  let timer:any = null;

  return function(this:any) {
    let args = arguments; // 回调方法参数
    let context = this; // 自身上下文

    if (timer) { // 每次触发后清除时间函数值
      clearTimeout(timer);
    }
    
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

/**
 * 校验为空，忽略数据格式
 * @param value 
 */
export function isEmpty (value:any){
  return (
    value === undefined
    || null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0)
  )
}