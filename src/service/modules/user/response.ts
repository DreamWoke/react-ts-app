import { CommonResponse } from "../common"
import { User } from "."

export type LoginResponse = {
  token: string
}

export type UserResponse = User
export type LogoutResponse = any
