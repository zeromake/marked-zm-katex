const path = require('path')
const webpack = require('webpack')
const srcPath = path.resolve(__dirname, './')
const outPath = path.resolve(__dirname, './dist')
const isProd = process.env.NODE_ENV === 'production'
const config = {
    entry: {
        'dist': path.resolve(srcPath, './index.js')
    },
    output: {
        path: outPath,
        filename: isProd? "[name].min.js": "[name].js",
    },
    devtool: '#source-map',
    resolve: {
        alias: {
            '@': srcPath
        },
        extensions: ['.js']
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'eslint-loader',
                enforce: 'pre',
                include: [srcPath],
                exclude: /node_modules/
            },
            {
                test: /\.js/,
                include: [srcPath],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }, {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            },
        ]
    }
}
if (isProd) {
    config.devtool = false
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
}
module.exports = config
