"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

console.log(path.resolve());

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
    new Dotenv(),
    // new FaviconsWebpackPlugin("../public/favicon.ico"),
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: process.env.PORT,
    proxy: {
      "**": process.env.PORT,
    },
  },
};
