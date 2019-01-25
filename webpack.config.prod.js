const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode:      'production',
	output:    { filename: '[name].[hash].js' },
	devServer: {
		contentBase:        './dist',
		publicPath:         '/',
		port:      	        3000,
		quiet:              true,
		historyApiFallback: true,
		overlay:            {
			warnings: false,
			errors:   true
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title:    'React random sample',
			template: path.join(__dirname, '/public/index.html')
		}),
		new CleanWebpackPlugin('dist', {
			root:    __dirname,
			verbose: true
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
		new UglifyJsPlugin({ test: /\.(js|jsx)$/i }),
		new BundleAnalyzerPlugin()
	],
	module: { rules: [
		{
			test:    /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			use:     {loader: 'babel-loader'}
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
			use:  [
				{
					loader:  'file-loader',
					options: {
						name:       '[name]-[hash:10].[ext]',
						outputPath: 'images/'
					}
				}
			]
		}
	] },
	resolve: { extensions: ['.js', '.jsx'] }
};
