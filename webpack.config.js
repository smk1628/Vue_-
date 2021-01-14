/* webpack基于node，使用commonjs模块化语法 向外暴露一个配置对象 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path') //node 内置

module.exports = {
    //入口
    entry:'./src/index.js',
    //出口
    output:{
        path:path.resolve(__dirname,'dist'), //绝对路径
        filename:'bundle.js' //生成打包后的文件名
    },
    //模块打包器
    module:{
        rules:[ //内部配置loader

        ]
    },
    //插件
    plugins:[   //实例插件对象
        new HtmlWebpackPlugin({
            template: './src/index.html' //在此目录下查找主页面文件
        }) //自动引入所有打包后的js并生成新的页面文件
    ],
    mode:'development'
}