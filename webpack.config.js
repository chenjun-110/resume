// webpack.config.js
var webpack = require("webpack");
var path = require("path");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './js/app.js', // 入口文件
    devtool: 'source-map',　　// 调试时定位到编译前的代码位置，推荐安装react插件
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: 'bundle.js' // 打包输出的文件
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-1','react'],   //坑！两个[[]]
                    cacheDirectory: true,
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-class-properties",
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader?sourceMap"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]' //[文件夹名][文件名]__[class名]--[]
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                loader: 'url-loader?limit=4192&name=[path][name].[ext]', //  <= 8kb的图片base64内联,大图片输出到dist目录
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10&minetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10&minetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10&minetype=image/svg+xml'
            }


        ]
    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee','.css'],
    },
};