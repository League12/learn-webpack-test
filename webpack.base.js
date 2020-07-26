
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
                test: /.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [

    ]
}


