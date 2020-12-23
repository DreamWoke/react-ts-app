import { CommonResponse } from "@/service/modules/common"
import { ProductType } from "."

// export type GetProductResponse = Product
export type GetProductResponse = CommonResponse<[ProductType]>
