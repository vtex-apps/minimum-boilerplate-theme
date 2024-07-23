const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['./src/checkout6-custom.js', './src/checkout6-custom.scss'],
  output: {
    filename: 'checkout6-custom.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
}
