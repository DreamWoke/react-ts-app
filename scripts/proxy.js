const proxySettings = {
  // 接口代理1
  "/api/": {
    target: "",
    changeOrigin: true,
  },
  // 接口代理2
  "/api-2/": {
    target: "",
    changeOrigin: true,
    pathRewrite: {
      "^/api-2": "",
    },
  },
  // .....
}

module.exports = proxySettings
