const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup : './src/chromeum-extension/popup.jsx',
        background : './src/chromeum-extension/background.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/chromeum-extension/popup.html',
          filename: 'popup.html',
        }),
        new CopyPlugin({
          patterns: [
            { from: "src/chromeum-extension/public" },
          ],
        })
      ],
    };