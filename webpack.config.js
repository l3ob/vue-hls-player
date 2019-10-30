const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    devtool: '#source-map',
    entry: './src/player.js',
    output: {
        filename: 'vue-hls-player.js',
        path: path.join(__dirname, 'lib'),
        publicPath: '/lib/',
        // library: '',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'hls.js': {
          amd: 'hls.js',
          commonjs: 'hls.js',
          commonjs2: 'hls.js',
          root: 'Hls'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader'] 
            },{
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
                
            },{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.(gif|jpg|jpeg|png)$/,
                use: [{
                    loader: 'url-loader', //把图片转base64  直接写在js里面  减少http请求
                    options: {
                        limit: 10240,
                        name: 'images/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
module.exports = config
