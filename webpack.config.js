const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    library: '',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist')
  },
  entry: {
    //index: ['@babel/polyfill', './src/index.js']
    index: './src/index.js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json', '.md']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-transform-classes',
              '@babel/plugin-transform-regenerator'
            ],
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    /* your options here */
                }
            }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist')
  ]
}
