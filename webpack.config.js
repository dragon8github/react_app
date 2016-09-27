var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry:{
       index : './src/js/index.js'
    },
    output: {
        path: './build/js/',  //输出文件夹
        filename:'[name].js'   //最终打包生成的文件名
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port:9091    //这个端口你可以自定义
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,   //是一个正则，代表js或者jsx后缀的文件要使用
                loader: 'babel',
                query:{
                    presets:['es2015','react','stage-0'] //必须先安装babel-preset-es2015和babel-preset-react
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],  //必须先安装css-loader和style-loader
　　　　　　}　　　　
 　　　　] 
　　},
    plugins:[
        //动态将上面编译好的js文件导入到以下html文件中并且生成到指定目录
        new HtmlWebpackPlugin({
             template:__dirname + '/src/tpl/index.html',
             filename:__dirname + '/build/tpl/index.html',              
             hash:true,
             inject:"body",
             chunks:['common','index']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",  //对应entry的对象名称
            chunks:['index']
        })
    ]　　 
}