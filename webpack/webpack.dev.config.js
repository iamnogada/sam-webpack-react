const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config.js");
const path = require("path");

module.exports = merge(commonConfig, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    contentBase: path.join("./asset"),
    proxy: {
      "/api": "http://localhost:9000/"
    }
  }
});
