var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require("./webpack.config.js")

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9091/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port:9091    //这个端口你可以自定义
});


server.listen(9091);