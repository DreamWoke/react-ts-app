import { RequestDefine } from ".."
// import {} from "./param"
import { AddProductParam } from "./param"
import { GetProductResponse, AddProductResponse } from "./response"

export interface ProductType {
  productId: string
  productName: string
  price: number
  productImg: string
  description: string
}

interface ProductApiMap {
  getProduct: RequestDefine<any, GetProductResponse>
  addProduct: RequestDefine<AddProductParam, AddProductResponse>
}

export default ProductApiMap
