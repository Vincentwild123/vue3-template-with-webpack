// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const {
    VueLoaderPlugin
} = require('vue-loader/dist/index')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development', // 环境模式
    entry: path.resolve(__dirname, 'index.ts'), // 打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: 'bundle.js' // 打包完的静态资源文件名
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        publicPath: '/',
        hot: true,
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/, // 不编译node_modules下的文件
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.template.html'), // 我们要使用的 html 模板地址
            filename: 'index.html', // 打包后输出的文件名
            title: 'Vue3 开发模板' // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
        }), // 添加 VueLoaderPlugin 插件
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}