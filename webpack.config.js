const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: `Jeremy's Life`,
      template: 'index.html',
      favicon: path.resolve('public/favicon.ico')
    })
  ]
}