import UserApiMap from "./user"
import ProductApiMap from "./product"

export interface RequestDefine<P, R> {
  params: P
  response: R
}
interface RequestList extends UserApiMap, ProductApiMap {}

export default RequestList
