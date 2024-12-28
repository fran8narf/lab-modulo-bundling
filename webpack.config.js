import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.jsx"
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx"]
  },
  output: {
    clean: true,
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|tiff|svg|webp|gif)$/,
        type: "asset/resource"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      hash: true
    }),
    new Dotenv({
      path: process.env.NODE_ENV === 'production' 
        ? './.env.production' 
        : './.env.development'
    })
  ],
  devServer: {
    port: 2244,
    hot: true
  },
}