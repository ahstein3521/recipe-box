var path = require("path")

module.exports = {
  
  entry: ['./src/index.js'],
  
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['react', 'es2015', 'stage-1']}
      },
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  } 
};
