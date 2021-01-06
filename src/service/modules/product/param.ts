import { ProductType } from "."

export type AddProductParam = Omit<ProductType, "productId">
