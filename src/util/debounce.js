// 防抖
const debounce = (fun, delay) => {
  let timeout = null;
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fun.call(that, _args);
    }, delay);
  };
}
export default debounce