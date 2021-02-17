const path = require('path')

module.exports = {
    entry: './scripts/main.js',
    output: {
        path:__dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env','react']
                }
            }
        }]
    }
};