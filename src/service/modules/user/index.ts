import { RequestDefine } from ".."
import { LoginParam, UserParam } from "./param"
import { LoginResponse, UserResponse } from "./response"

export interface User {
  id: number
  name: string
  cellphone: string
  identity: string
}

interface UserApiMap {
  login: RequestDefine<LoginParam, LoginResponse>
  user: RequestDefine<UserParam, UserResponse>
}

export default UserApiMap
