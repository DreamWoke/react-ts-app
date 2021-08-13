# Flying-Candy

这是一个由 webpack 构建的 react + typescript 脚手架，主要包括了

- Eslint 和 Prettier 结合规范代码风格，检测代码质量
- Webpack 对于 react 和 typescript 项目的配置
- 使用 Webpack plugins 扩展对开发和生产环境的优化

### 快速开发

    安装依赖：
    yarn install

    本地运行：
    yarn serve

    打包：
    yarn build

### 为什么搭建？

由于最近在写 Vue2.6+项目，引入 typescript 过程中发现了很多问题，在 vue 中使用 tsx 使得 vue 变得不再 vue，用 template 又不能完全支持 typescript，所以决定自己搭一个 react 结合 typescript 的脚手架，真香～

### 为什么这样搭建？

首先使用目前最流行的构建工具 webpack，通过配置 Plugin 扩展来优化开发环境，优化打包后代码，使用 Eslint 和 Prettier 规范化 TS 和 JS 代码，下面具体看下用到了哪些，为什么这样用?

#### Eslint

代码质量检测选择了 ts 官方推荐的 Eslint，使用了 npm 的 npx eslint --init 创建了.eslintrc.js(最好再增加一个.eslintignore 文件),选择了 Airbnb 规范(当然也可以使用 standard)，在这个基础上扩展,以下是一些用到的包

- eslint-config-airbnb
- eslint-config-prettier(关闭所有不必要的规则或可能与 Prettier 冲突的规则)
- eslint-import-resolver-typescript
- eslint-plugin-jsx-a11y
- eslint-plugin-promise(对于 promise 的一些检查)
- eslint-plugin-react
- eslint-plugin-react-hooks(react-hooks 的一些规则)
- eslint-plugin-unicorn

#### Prettier

用 Prettier 规范代码风格，可以选择默认用 Prettier 格式化，开启保存自动修复，项目中.vscode 文件夹中也设置了 Prettier 自动保存，会覆盖本地的 setting.json 配置(也就是优先项目中的配置)

#### vscode 配置部分

vscode 安装 Prettier 和 Eslint 插件，setting.json 配置部分详解如下

    "editor.formatOnSave": true,  //用你默认的格式化保存代码，建议使用Prettier
    "eslint.autoFixOnSave": true, //开启保存eslint自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true //同上
    }

#### CI

##### Github Actions+COS

因为代码托管在 Github,所以使用了 Github 自带的 actions,优点是比较便捷。
因为服务器也是腾讯云服务器,存储桶选用了腾讯云的 COS(有提供 CDN 服务).

### WebPack

#### webpack 基本配置

webpack 版本直接上了最新的(持续踩坑中...),项目 webpack 主要有以下特点:

- 用了 webpack-merge 做了配置分离，可以把公共的 webpack 配置放到一个 common 文件中，然后开发和生产环境的文件用 webpack-merge 来合
- 用 cross-env 实现跨平台设置环境变量(主要在脚本中使用)

#### loader 配置

webpack 默认是只能处理 js(babel-loader)，所以要加很多 loader 模块来处理其他文件，例如 scss 文件等
还是和之前一样，用 sass-loader,css-loader,style-loader.在这个基础上，增加了 postcss-loade,
看了很多配置方法，还是在根目录创建了 postcss.config.js 文件，并安装了 autoprefixer

    {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }, //可以帮我们加一些浏览器的前缀等
          { loader: 'sass-loader' },
        ],
    },

图片和字体文件处理用 file-loader 和 url-loader,设置一个 limit，较小的图片可以直接转化成 base64

    {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },

#### plugins

感觉这才是 webpack 比较灵活(体现区别)并且关键的部分,先说生产环境用到的

- html-webpack-plugin
- copy-webpack-plugin

  ```
  new CopyPlugin({
    patterns: [
      {
        context: resolve(PROJECT_PATH, './public'), //将public的静态资源复制到dist中
        from: '*',
        to: resolve(PROJECT_PATH, './dist'),
        toType: 'dir',
      },
    ],
  }),
  ```

- mini-css-extract-plugin(把 css 单独打包)
- clean-webpack-plugin(构建时会先把上次打包的文件清除)
- purgecss-webpack-plugin(打包时可以忽略我们没有用到的样式)

接下来是开发环境用的，主要是终端的信息展示优化，和错误提醒

- webpackbar(本地启动、打包显示进度条，据说还可以根据不同阶段提供了钩子，文档内容太少，没看懂怎么用，项目中使用了默认)
- fork-ts-checker-webpack-plugin(ts 文件的错误显示到终端)
- friendly-errors-webpack-plugin(自定义本地运行后显示的内容，还给了一个 onErrors 函数，可以配置显示报错，因为用到了上面，就没开启)

```
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${SERVER_HOST}:${SERVER_PORT}`],
      },
      clearConsole: true, //这个很好用，每次清屏
    })
```

#### optimization

webpack4 开始，会根据 mode 来执行优化，如果要手动配置，可以在 webpack 的 optimization 配置
先贴下官方文档～ [传送门](https://webpack.docschina.org/configuration/optimization/)

- terser-webpack-plugin(js 代码压缩，webpack5+好像可以直接使用，我没找到怎么用，需要修改配置安装下)
- optimize-css-assets-webpack-plugin(css 代码压缩)

重点:感觉可以研究下 splitChunks(拆分包，提取公共 js)，项目中只使用了 webpack 文档的默认配置，我理解这个可以根据项目来自定义拆分的。

### 接下来要做的

- 项目文件目录规范
- ...
