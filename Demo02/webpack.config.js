const path = require('path')
module.exports = {
   entry: {
       bundle1: './src/js/main1.js',
       bundle2: './src/js/main2.js'
   },
    output: {
       // 打包到指定路径下
       // path: path.resolve(__dirname, './dist'),
       // path: path.resolve(__dirname, '测试'),
       path: path.resolve(__dirname, 'dist'),
       filename: './js/bundle.[name].[hash].js'
    }
}