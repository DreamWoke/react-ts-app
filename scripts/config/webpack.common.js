const path = require("path")

const { resolve } = path
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const WebpackBar = require("webpackbar")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const { isDev, PROJECT_PATH } = require("../constants")

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.tsx"),
  },
  output: {
    filename: `js/[name].${isDev ? "" : "[hash:8]"}.js`,
    path: resolve(PROJECT_PATH, "./dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@": resolve(PROJECT_PATH, "./src"),
      Common: resolve(PROJECT_PATH, "./src/common"),
      Components: resolve(PROJECT_PATH, "./src/components"),
      Utils: resolve(PROJECT_PATH, "./src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar({
      name: isDev ? "启动中..." : "打包中...",
      color: "#35ba8c",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(PROJECT_PATH, "./tsconfig.json"),
      },
    }),
    new HtmlWebpackPlugin({
      title: "React+Typescript7",
      template: resolve(PROJECT_PATH, "./public/index.html"),
      filename: "index.html",
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, "./public"),
          from: "*",
          to: resolve(PROJECT_PATH, "./dist"),
          toType: "dir",
        },
      ],
    }),
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      !isDev &&
        new TerserPlugin({
          extractComments: false,
        }),
      !isDev && new OptimizeCssAssetsPlugin(),
    ].filter(Boolean),
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
}
