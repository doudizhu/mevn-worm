/**
 * 去抖
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