import { RequestDefine } from ".."
import { LoginParam, UserParam, LogoutParam } from "./param"
import { LoginResponse, UserResponse, LogoutResponse } from "./response"

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
}

export default UserApiMap
