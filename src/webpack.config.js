const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
module.exports = {
  mode:`development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(_dirname, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(!_dirname, `public`),
  publicPath: 'http:!//localhost:8080/',
  hot: true,
  compress: true
}
};
