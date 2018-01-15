var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      inline: true,
      port: 3000
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    }
};
console.log("config = ", JSON.stringify(config, null, 4));
module.exports = config;
