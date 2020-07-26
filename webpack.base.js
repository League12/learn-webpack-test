const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /.js$/, // 处理es以及react
                use: ['babel-loader']
            }, {
                test: /.(png|jpg|gif|jpeg|svg)$/, // 处理图片文件
                use: 'file-loader'
            }, {
                test: /.less$/,  // 处理less
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /.css$/,  // 处理css
                use: [
                    'style-loader',
                    'css.loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}


