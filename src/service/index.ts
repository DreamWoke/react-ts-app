import axios, { AxiosPromise, AxiosRequestConfig } from "axios"
// import { toLogin } from "@/utils/function"
import { getToken, removeToken } from "@/utils/token"
// import store from "@/store"
import { message, notification } from "antd"
import RequestList from "@/service/modules"

// eslint-disable-next-line react-hooks/rules-of-hooks
interface ServiceParams<T extends keyof RequestList> extends AxiosRequestConfig {
  url: T
  data?: RequestList[T]["params"]
  // params?: RequestList[T]["params"]
}

type RequestFunc = <T extends keyof RequestList>(params: ServiceParams<T>) => AxiosPromise<RequestList[T]["response"]>

// const Domain = "http://localhost:3000"
const BaseURL = "/api"
const AxiosInstance = axios.create({
  method: "POST",
  timeout: 10000,
  withCredentials: false,
  // baseURL: "/api",
})

const processError = async (error: any) => {
  // 这边处理http的错误状态 而不处理返回中的如  respCode 的错误信息
  if (error && error.response) {
    const { status } = error.response
    switch (status) {
      case 400:
        error.message = "请求错误"
        break
      case 401:
        error.message = "未授权，请登录"
        await removeToken()
        window.location.href = "/login"
        break
      case 403:
        error.message = "拒绝访问"
        break
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        error.message = "请求超时"
        break
      case 500:
        error.message = "服务器内部错误"
        break
      case 501:
        error.message = "服务未实现"
        break
      case 502:
        error.message = "网关错误"
        break
      case 503:
        error.message = "服务不可用"
        break
      case 504:
        error.message = "网关超时"
        break
      case 505:
        error.message = "HTTP版本不受支持"
        break
      default:
        break
    }
    return ""
  }

  // 错误提醒
  notification.error({
    message: "系统错误",
    description: error.message,
  })

  return Promise.reject(error)
}
// 拦截器
AxiosInstance.interceptors.request.use((config) => {
  config.url = `${BaseURL}/${config.url}`
  // config.headers["Content-Type"] = ["application/json"] // 为mock增加，联调时考虑删除
  config.headers.Authorization = getToken()
  return config
})

AxiosInstance.interceptors.response.use((response) => {
  const res = response.data
  if (res.code === 0) {
    return response
  }
  message.error(res.message || res.errorMsg || "Error")
  return Promise.reject(res)
}, processError)

const Service: RequestFunc = AxiosInstance.request

export default Service
