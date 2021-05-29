const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.styl$/,
      include: [
        path.resolve(__dirname, 'styles'),
      ],
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }, {
      test: /\.otf|svg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          }
        }
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: `Jeremy's Life`,
      template: 'index.html',
      favicon: path.resolve('public/favicon.ico')
    })
  ]
}