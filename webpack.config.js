const path = require("path");

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

      /**웹팩 5버전은 file-loader 없이 파일 자동으로 옮겨지는듯??? */
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
};
