const currentTask = process.env.npm_lifecycle_event
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const config = {
  entry: './app/app.js',
  output: {
    filename: 'myBundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
}

if (currentTask === 'build') {
  config.mode = 'production'
  config.module.rules[0].use[0] = MiniCSSExtractPlugin.loader
  config.plugins.push(
    new MiniCSSExtractPlugin({
      filename: 'main.[hash].css',
    })
  )
}

module.exports = config
