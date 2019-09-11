const path = require('path');

module.exports = {
    entry: './wwwroot/source/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};