const path = require('path'); //node.js的语法，引入路径模块，为了输出的时候找绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        home: './src/js/home.js',
        cast: './src/js/cast.js',
        video: './src/js/video.js',
        plot: './src/js/plot.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].bundle.js',
        // chunkFilename:  "js/[name].bundle.js"
    },
    devServer: {
        contentBase: "./dist/html",
        historyApiFallback: true,
        inline: true,
        port: 8083,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/index.html",
            filename: './html/index.html',
            chunks: ['home'],
            inject: true
        }),

        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/cast.html",
            filename: './html/cast.html',
            chunks: ['cast'],
            inject: true
        }),

        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/video.html",
            filename: './html/video.html',
            chunks: ['video'],
            inject: true
        }),

        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/plot.html",
            filename: './html/plot.html',
            chunks: ['plot'],
            inject: true
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[name].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                exclude: /node_modules/,
                options: {
                    attrs: ['img:src', 'link:href'],
                    name: '[name].[ext]',
                    interpolate: true
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // limit: 1024 * 30,
                            // fallback: 'file-loader',
                            name: '[name].[ext]',
                            outputPath: './images/',
                            publicPath: '../images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 100
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-100',
                                speed: 4
                            }
                        },
                    },
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            limit: 5000,
                            publicPath: "../fonts/",
                            outputPath: "./fonts/"
                        }
                    }
                ]
            }
        ]
    },
};