import path from 'path'
import webpack from 'webpack'

export default {
	entry: {
    base: [
            'webpack-hot-middleware/client',
            path.join(__dirname, '/client/index.js')
        ]
    },
	output: {
		path: __dirname + '/',
		publicPath: '/',
        filename: "[name]-bundle.js"
	},
	plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
	],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client'),
        use: ['babel-loader']
      }
    ]
  },
	devtool: 'cheap-module-eval-source-map',
	resolve: {
    extensions: ['*', '.js', '.jsx']
	}
}