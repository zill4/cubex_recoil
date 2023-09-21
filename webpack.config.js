const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'styles': path.resolve(__dirname, 'docs/styles.ts'),
        'docs': path.resolve(__dirname, 'docs/index.tsx')
    },
    output: {
        library: {
            name: '[name]',
            type: 'var'
        },
        filename: './bundle/[name].js'
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [/src/, /docs/]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader', // This injects styles into the DOM
                  'css-loader',   // This interprets @import and url() like import/require() and will resolve them
                  'less-loader'   // This compiles Less to CSS
                ]
              }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};
