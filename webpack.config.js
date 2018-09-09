//basis module
const path = require('path');
const webpack = require('webpack');


//plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ImageMinPlugin = require('image-min-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//main config
module.exports = (env, options) => {
    const isDevelopment = options.mode === 'development';
    const isProduction = !isDevelopment;

    let conf = {

        //point in
        entry: 
            [
                'react-hot-loader/patch',
                path.resolve(__dirname, 'src', 'js', 'index.js'),
                path.resolve(__dirname, 'src', 'scss', 'style.scss') 
            ],

        //path output files
        output:{
            filename: 'js/script.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "dist/"
        },

        //config webpack-dev-server
        devServer: {
            compress: true,
            overlay: true
        },

        devtool: (isDevelopment) ? 'eval-sourcemap' : false,

        //modules
        module: {
            rules:[
                //js
                {
                    test: /\.jsx?$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: 'babel-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                },
                //styles
                {
                    test: /\.(sc|c|sa)ss$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: isDevelopment,
                                minimize: isProduction
                            }
                        },
                        'postcss-loader',
                        "sass-loader"
                    ]
                },
                //images
                {
                    test: /\.(png|gif|jpe?g)$/,
                    exclude: '/node_modules/',
                    loader:[
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]'
                            }
                        },
                        'img-loader'
                    ]
                },
                //fonts
                {
                    test: /\.(woff|woof2|eot|ttf|otf)$/,
                    exclude: '/node_modules/',
                    loader:[
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]'
                            }
                        }
                    ]  
                },
                //SVG converter
                {
                    test: /\.svg$/,
                    exclude: '/node_modules/',
                    loader: 'svg-url-loader'
                }
            ]
        },
        //plugins
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'JQuery': 'jquery',
                'jquery': 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            }),
            new CopyWebpackPlugin(
                [
                    {
                        from: path.resolve(__dirname, 'src', 'img'), 
                        to: 'img'
                    },
                    {
                        from: path.resolve(__dirname, 'src', 'fonts'), 
                        to: 'fonts'
                    }
                ],
                {
                    ignore: [
                        {
                            glob: path.resolve(__dirname, 'src', 'svg', '*')
                        }
                    ]
                }
            )
        ]
    };
    //isProduction
    if (isProduction){
        conf.plugins.push(
            new HtmlWebpackPlugin(
                {
                    filename: 'index.html',
                    inject: false,
                    hash: true,
                    template: path.resolve(__dirname, 'src', 'index.html'),
                    minify:{
                        removeComments: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true
                    }
                }
            )
        );
        conf.plugins.push(
            new CleanWebpackPlugin(["dist"])
        );
        conf.plugins.push(
            new UglifyjsWebpackPlugin({
                sourceMap: true
            })
        );
        conf.plugins.push(
            new ImageMinPlugin({
                test: /\.(png|gif|jpe?g|svg)$/
            })
        );
    }
    return conf;
}