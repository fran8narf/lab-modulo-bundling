import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const isPerformanceMode = process.env.ANALYZE;

export default {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.ts"
  },
  resolve: {
    extensions: [".js", ".ts"]
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
        ? './.env.prod'
        : './.env.dev'
    }),
    ...(isPerformanceMode ?
      [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: true })]
      : []
    )
  ],
  devServer: {
    port: 2244,
    hot: true
  },
}