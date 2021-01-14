/* webpack基于node，使用commonjs模块化语法 向外暴露一个配置对象 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
            /* 处理es6转es5 */
            {
                test: /\.js$/, //编译js文件
                //exclude: /(node_modules|bower_components)/, //排除要编译的文件
                include:[path.resolve(__dirname,'src')], //只对匹配的文件夹进行编译
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'], //配置预设包(包含流多个ES语法解析的plugin包)
                    plugins:[   //配置预设包之外的包

                    ]
                  }
                }
            },
            /* 处理css */
            {
                test:/\.(css|less)$/,
                use:['style-loader','css-loader','less-loader'] //loader处理从小向上，从右向左
            },
            /* 处理图片 */
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:10*1024, //小于10k的图片就进行base64处理
                    name:'[name].[hash:7].[ext]'    //输出文件名
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    },
    //插件
    plugins:[   //实例插件对象
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(), //每次构建前清理/dist文件夹
        new HtmlWebpackPlugin({
            template: './src/index.html' //在此目录下查找主页面文件
        }) //自动引入所有打包后的js并生成新的页面文件
    ],
    //模式
    //mode:'development',
    //开发服务器
    devServer: {
        port:8081,
        open:true,
        contentBase: './dist', //将 dist 目录下的文件 serve 到 localhost:8080 下
        //hot: true   //启用热模替换
    },
    devtool: 'source-map',  // 代码调试
}