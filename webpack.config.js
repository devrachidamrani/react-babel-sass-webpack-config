const currentTask = process.env.npm_lifecycle_event
const path = require('path')

const config = {
  entry: './app/app.js',
  output: {
    filename: 'myBundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
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
}

module.exports = config
