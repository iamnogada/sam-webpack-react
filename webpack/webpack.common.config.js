const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./app/client/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        //Style loader
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        //url loader
        test: /\.ttf$/,
        loaders: ["url-loader"]
      },
      // {
      //   //file loader
      //   test: /\.(png|jpg|gif)$/,
      //   use:[
      //     {
      //       loader: 'file-loader',
      //       options:{
      //         outputPath: 'img/',
      //         publicPath: 'img/'
      //       }
            
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: "asset/index.html",
      favicon: "asset/favicon.ico"
    }),
    
  ]
};
