const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: './app/index.js',
  devServer: {
    contentBase: path.join(__dirname, "app"),
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
          test: /\.s[ac]ss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: "file-loader"
      }
    ]
  },
};
