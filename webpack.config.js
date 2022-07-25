const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config();

const mode = process.env.NODE_ENV;
const isDev = mode === "development";

module.exports = {
  mode,
  entry: {
    webComponent: "./src/WebComponents/index",
    main: "./src/index.ts",
    react: "./src/React/entries/index",
    vue: "./src/Vue/entries/index",
    svelte: "./src/Svelte/entries/index",
  },
  output: {
    publicPath: "/",
    path: path.resolve("./dist"),
    filename: "[name].[hash].bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$|.jsx$/, loader: "babel-loader", exclude: /node_module/ },
      {
        test: /\.ts$|.tsx$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: isDev,
            },
            emitCss: !isDev,
            hotReload: isDev,
          },
        },
      },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".ts", ".js", ".tsx", "jsx", "vue", ".mjs", ".svelte"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "assets"),
      "@myTypes": path.resolve(__dirname, "types"),
      "@web": path.resolve(__dirname, "src/WebComponents"),
      "@api": path.resolve(__dirname, "src/api"),
      "@util": path.resolve(__dirname, "src/util"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  optimization: {
    runtimeChunk: "single", // for react dev
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    open: false,
    host: "local.onstove.com",
    port: 8080,
    hot: true, // default. vs live-reload
    historyApiFallback: true,
  },
};
