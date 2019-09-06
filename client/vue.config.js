module.exports = {
  productionSourceMap: false, // 生产环境map(同configureWebpack下devtool)
  devServer: {
    port: 10001, // 为避免线上端口冲突故设置较大值
  }
}