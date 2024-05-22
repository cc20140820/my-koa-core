function myCompose(middlewares) {
  return function (ctx, next) {
    return dispatch(0)
    function dispatch(i) {
      let fn = middlewares[i]
      if (i === middlewares.length) {
        fn = next // 这里让fn等于外部传进来的next，其实是进行收尾工作，比如返回404
      }

      if (!fn) {
        return
      }

      fn(ctx, dispatch.bind(null, i + 1))
    }
  }
}

module.exports = myCompose
