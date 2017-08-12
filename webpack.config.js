const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageInfo = require('./package.json');

const extractLess = new ExtractTextPlugin({
  filename: 'css/app.css'
});

module.exports = () => {
  const config = {
    context: `${__dirname}/src/app`,
    entry: {
      'js/app.js': ['./index.js'],
      'css/app.css': ['./styles/app.less']
    },
    output: {
      filename: '[name]',
      path: `${__dirname}/build/dev/${packageInfo.name}`
    },
    devtool: 'sourcemap',
    devServer: {
      //contentBase: path.join(__dirname, "dist"),
      publicPath: `/${packageInfo.name}/`,
      historyApiFallback: {
        index: `/${packageInfo.name}/index.html`
      },
      stats: {
        colors: true
      }
    },
    plugins: [
      extractLess,
      new CopyWebpackPlugin(
        [
          { from: '../../README.md', to: './README.md' },
          { from: './index.html', to: './index.html' },
          { from: './index.html', to: './404.html' },
          { from: './favicon.ico', to: './favicon.ico' }
        ],
        { copyUnmodified: true }
      ),
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader'
            }
          ]
        },
        {
          test: /\.less$/,
          use: extractLess.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader'
              }
            ]
          })
        },
        {
          test: /.*\/images\/.*/,
          use: [
            {
              loader: 'url-loader?name=./images/[name].[ext]'
            }
          ]
        },
        {
          test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$/,
          use: [
            {
              loader: 'url-loader?name=./fonts/[name].[ext]'
            }
          ]
        }
      ]
    }
  };

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      })
    );
    config.output.path = `${__dirname}/build/prod`;
  }

  return config;
};
