import { RequestDefine } from ".."
import { LoginParam } from "./param"
import { LoginResponse } from "./response"

export interface User {
  id: number
  name: string
  cellphone: string
  identity: string
  password: string
}

interface UserApiMap {
  login: RequestDefine<LoginParam, LoginResponse>
}

export default UserApiMap
