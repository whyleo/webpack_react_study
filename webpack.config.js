const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', //“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {
        path: __dirname + '/build',
        filename: 'bundle-[hash].js'
    },
    devServer: {
        contentBase: './build', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,//实时刷新
        port: '10086',
        hot: true
    },
    optimization: {
        occurrenceOrder: true, // ???
        minimize: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: [
                        //         'env', 'react'
                        //     ]
                        // } 
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // or 'local'
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ] // 对同一个文件使用多个loader
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin('common.css')
    ]
}