import { CommonResponse } from "../common"
import { User } from "."

export type LoginResponse = CommonResponse<{
  token: string
}>

export type UserResponse = CommonResponse<User>
export type LogoutResponse = CommonResponse<any>
