/**
 * Created by liqiankun on 2017/4/19.
 */

var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require("./webpack.config");


//启动服务


gulp.task('default', function () {

    var server = new WebpackDevServer(webpack(webpackConfig));
    // var server = new WebpackDevServer(webpack(webpackConfig, {
    //
    //
    //     proxy: {
    //         "/api": {
    //             // target: "https://cnodejs.org",
    //             target: "http://www.slfteam.com",
    //
    //             secure: false
    //             // pathRewrite: {"^/api" : ""}
    //         }
    //     }
    // }));


    server.listen(8080);

});
