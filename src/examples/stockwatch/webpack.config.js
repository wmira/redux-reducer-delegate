var webpack = require('webpack');
var plugins = [];

if ( process.env.NODE_ENV === 'production' ) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }));
}

module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {
        }
    },
    node: {
        buffer: false
    },

    plugins: plugins,

    module: {
        loaders: [
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
};
