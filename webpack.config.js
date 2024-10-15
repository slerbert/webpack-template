/*  --- DETAILED STEPS --- (taken from Nick Yonge (https://github.com/nickyonge))
 *    with terminal cmds
 * 
 * 1: Create new folder (project, vscode workspace, github repo, etc), and place this file in it
 * 2: install npm
        npm init -y
 * 3: initialize webpack
        npm install -D webpack webpack-cli
 * 4: initialize html webpack plugin, to auto-generate .html files in ./dist folder upon build 
        npm install -D html-webpack-plugin
 * 5: initialize webpack dev server, for local testing at url "localhost:8080" (while watching)
        npm install -D webpack-dev-server
 * 6: prep CSS loader, to import .css files from ./src
        npm install -D style-loader css-loader
 * 7: install html loader to detect and load local image files (uncomment below if using)
        npm install --D html-loader
 * 8: add the following values to package.json's "scripts": {} array
        "build": "webpack",
        "dev": "webpack serve",
        "deploy": "git subtree push --prefix dist origin gh-pages",
 *          to enable terminal commands "npm run build" and "npm run deploy", respectively 

 * 9: create a ./src subfolder, and inside it, a file called index.js
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },  
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     use: "asset/resource",
            // },
        ],
    },
};