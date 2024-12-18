import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import url from "url"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking"
    })
  ],
  devServer: {
    port: 2244,
    static: path.join(__dirname, "src"),
    hot: true
  },
}