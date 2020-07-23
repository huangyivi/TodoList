const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')
// 引入webpack插件
const webpack = require('webpack')
const devConfig = {
    // 模式
    mode: 'development',
    //入口文件
    // 打开源代码映射，可定位错误
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase:'./dist',
        // 打开浏览器
        open: true,
        // 热模块替换
        hot: true,        
    },
    
    //插件
    plugins:[

        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(baseConfig,devConfig);