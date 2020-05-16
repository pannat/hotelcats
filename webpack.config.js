const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const PATH = {
    src: path.resolve(__dirname, 'src'),
}
const PAGES = fs.readdirSync(PATH.src + "/pages").filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    entry: './main.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    devtool: 'eval-source-map',
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PATH.src}/pages/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(styl|css)$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "stylus-loader"
                        }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}