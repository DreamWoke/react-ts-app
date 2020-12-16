import VersionRequestList from "./version"
import UserApiMap from "./user"

export interface RequestDefine<P, R> {
  params: P
  response: R
}
export interface RequestList extends VersionRequestList, UserApiMap {}
