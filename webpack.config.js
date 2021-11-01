const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
        options: {
          puplicPath: "./dist",
          name: "[name].[ext]?[hash]",
          limit: 50000, //20b
        },
      },
    ],
  },
  plugins: [new MyWebpackPlugin()],
};
