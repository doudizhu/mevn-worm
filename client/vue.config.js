// 生产环境：配置github预览页
const procetName = require('../package.json').name
const prodConfigGit = process.env.NODE_ENV === 'production' && process.argv[3].slice(2) === 'git'
? {
  publicPath: `https://doudizhu.github.io/${procetName}/client/dist/`, // github预览时：相对路径，深入切换页面时，加载资源文件路径会有缺失问题
}
: {}
// console.log('prodConfigGit:',prodConfigGit)


// 生产环境：整体
const prodConfig = process.env.NODE_ENV === 'production' 
  ? {
    ...prodConfigGit,
    productionSourceMap: false, // 生产环境map(同configureWebpack下devtool)
  }
  : {}
module.exports = {
  ...prodConfig,
  devServer: {
    port: 10001, // 为避免线上端口冲突故设置较大值
  }
}