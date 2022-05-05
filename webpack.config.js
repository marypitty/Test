const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "img/[hash][ext][query]",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]

            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    devServer: {
        port: 5000,
        open: true,
        static: path.resolve(__dirname, "dist")
    },
    mode: "development"
}


