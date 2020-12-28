import { RequestDefine } from ".."
import { LoginParam, UserParam, LogoutParam, UploadImgParam } from "./param"
import { LoginResponse, UserResponse, LogoutResponse, UploadImgResponse } from "./response"

export interface User {
  id: number
  name: string
  cellphone: string
  identity: string
}

interface UserApiMap {
  login: RequestDefine<LoginParam, LoginResponse>
  user: RequestDefine<UserParam, UserResponse>
  logout: RequestDefine<LogoutParam, LogoutResponse>
  upload: RequestDefine<UploadImgParam, UploadImgResponse>
}

export default UserApiMap
