// 导入path模块
const path = require('path')
// 引入vueloader
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
// 返回对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    //入口文件
    entry: './src/main.js',
    // 出口
    output: {
        filename: 'bundle.js',
        // 绝对路径
        path: path.resolve(__dirname,'../dist')    //在当前路径下打包成一个文件夹
    },
    //打包规则
    module:{
        rules:[{  //解析es6☞es5
            test: /\.js$/,
            exclude: /node_module/,
            loader :"babel-loader"
        },{
            // 当遇到vue结尾的文件，使用vue-loader进行打包
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',   //依赖于file-loader
            options:{
                name:'[name].[ext]',
                limit: 2048     //当文件小于2K时，以base64方式打包到js，减少http请求次数
            }
        },{
            test: /\.css$/,
            use:['style-loader','css-loader']   //从右到左执行
            //cssloader将css文件解析合并，打包成一个文件，style将起打包的文件挂载到html上
        },{
            test: /\.styl(us)?$/,
            use: ['vue-style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader']
        }]
    },

    //插件
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin(),
    ],

    resolve:{
        // 别名，是vue导入的不是默认的commonjs
        alias:{
            'vue' : 'vue/dist/vue.js',
            '@': path.resolve(__dirname,'../src'),
            'style' : path.resolve(__dirname,'../src/assets/style'),
            'images' : path.resolve(__dirname,'../src/assets/images')
        }
    }
}