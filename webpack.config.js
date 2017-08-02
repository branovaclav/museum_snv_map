const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
		index: './src/index.js',
		admin: './src/admin.js'
	},
    output: {
        path: path.join(__dirname, 'src'),
        filename: '[name].bundle.js'
    },
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		proxy: [{
			context: ['/data', '/data.js', '/admin'],
	        target: 'http://localhost:3000'
		}]
	},
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: [ 'es2015', 'react'] } }},
			{ test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
        ]
    },
	resolve: {
      extensions: [ '.js', '.jsx' ]
    }
}
