"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "./public",
        from: "*.*",
      },
    ]),
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3030,
  },
};
