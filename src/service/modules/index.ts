import UserApiMap from "./user"

export interface RequestDefine<P, R> {
  params: P
  response: R
}
export type RequestList = UserApiMap
