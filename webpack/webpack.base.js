const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (options) => {
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, '../webpack/dist'),
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
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/',
              },
            },
          ],
        },
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.react.js'],
      mainFields: ['browser', 'jsnext:main', 'main'],
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
      },
      alias: {
        '@constants': path.resolve(__dirname, '../src/constants/CONSTANTS.js'),
        '@url': path.resolve(__dirname, '../src/constants/URL.js'),
        '@api': path.resolve(__dirname, '../src/constants/API.js'),
        '@services': path.resolve(__dirname, '../src/app/services/'),
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
        'process.env.NODE_ENV': JSON.stringify(options.mode || 'development'),
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
      }),
      new Dotenv({
        path: path.resolve(__dirname, '../.env'), // Path to .env file
        safe: false, // Load .env.example (if any) to verify the .env variables are all set. Can also be a string to a different file.
      }),
    ],
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
  };
};