const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (options) => {
  const isDev = options.mode === 'development';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.react.js'],
      mainFields: ['browser', 'jsnext:main', 'main'],
      alias: {
        '@constants': path.resolve(__dirname, '../src/constants/CONSTANTS.js'),
        '@url': path.resolve(__dirname, '../src/constants/URL.js'),
        '@api': path.resolve(__dirname, '../src/constants/API.js'),

        '@src': path.resolve(__dirname, '../src/'),
        '@app': path.resolve(__dirname, '../src/app/'),
        '@assets': path.resolve(__dirname, '../src/assets/'),
        '@pages': path.resolve(__dirname, '../src/app/pages/'),
        '@components': path.resolve(__dirname, '../src/app/components/'),
        '@containers': path.resolve(__dirname, '../src/app/containers/'),
        '@common': path.resolve(__dirname, '../src/app/common/'),
        '@translations': path.resolve(__dirname, '../src/app/translations/'),
        '@store': path.resolve(__dirname, '../src/app/store/'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new Dotenv({
        path: path.resolve(__dirname, '../.env'), // Path to .env file
        safe: true, // Load .env.example (if any) to verify the .env variables are all set. Can also be a string to a different file.
      }),
    ],
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
  };
};