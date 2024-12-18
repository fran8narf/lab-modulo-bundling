import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
  entry: {
    app: "./src/index.js"
  },
  output: {
    clean: true,
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      hash: true
    })
  ],
  devServer: {
    port: 2244
  },
}