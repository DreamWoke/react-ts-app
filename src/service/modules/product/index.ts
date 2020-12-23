import { RequestDefine } from ".."
// import {} from "./param"
import { GetProductResponse } from "./response"

export interface Product {
  productId: string
  price: number
  description: string
}

interface ProductApiMap {
  getProduct: RequestDefine<any, GetProductResponse>
}

export default ProductApiMap
