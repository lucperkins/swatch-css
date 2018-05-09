const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const config = {
  mode: 'development',
  entry: ['./src/index.js', './src/sass/style.sass'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: 'dist' }
    })
  ]
}

module.exports = config