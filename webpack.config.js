const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        // exclude: /node_modules/
      },
      // {
      //   test: /\.ts(x)?$/,
      //   loader: 'ts-loader',
      //   // exclude: /node_modules/
      // },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        // exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              mimetype: 'image/png',
              limit: 500,
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
        // exclude: [resolve('src/assets/images')]
      },
    ],
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.tsx',
      '.ts',
    ],
    alias: {
      // 'react-dom': '@hot-loader/react-dom',
      react: path.resolve('./node_modules/react'),
    },
    modules: [
      path.resolve('node_modules'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hot: true,
    https: false,
    noInfo: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      env: true
    },
    before: function (app, server, compiler) {
      process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')
      console.clear()
    }
  },
  // externals: {
  //   "react": path.resolve('./node_modules/react'),
  //   "react-dom": path.resolve('./node_modules/react-dom')
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process': {
        "env": JSON.stringify(require('./env.development'))
      }
    })
  ],
}