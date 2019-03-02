const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
module.exports = {
  mode:`development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
  publicPath: 'http://localhost:8080/',
  hot: true,
  compress: true
}
};