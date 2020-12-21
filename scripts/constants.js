const path = require("path")

const CONFIG_MAP = {
  developmentConfig: {
    PROJECT_NAME: "Flying-candy-dev",
    PUBLIC_PATH: path.resolve(__dirname, "../dist"),
  },
  productionConfig: {
    PROJECT_NAME: "Flying-candy",
    PUBLIC_PATH: "https://console-1300990907.file.myqcloud.com/",
  },
}

const isDev = process.env.NODE_ENV === "development"
const SERVER_HOST = "localhost"
const SERVER_PORT = 5000
const PROJECT_PATH = path.resolve(__dirname, "../")

// 是否开启 modules 缓存
const IS_OPEN_HARD_SOURCE = true

// 是否开启 bundle 包分析
const shouldOpenAnalyzer = false

const ENV_CONFIG = CONFIG_MAP[`${process.env.NODE_ENV}Config`]

module.exports = {
  isDev,
  SERVER_HOST,
  SERVER_PORT,
  PROJECT_PATH,
  IS_OPEN_HARD_SOURCE,
  shouldOpenAnalyzer,
  ...ENV_CONFIG,
}
