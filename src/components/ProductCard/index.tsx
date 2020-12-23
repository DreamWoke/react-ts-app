import React from "react"
import { Card, Button } from "antd"
import Img from "@/image/product.png"
import { ProductType } from "@/service/modules/product"
import "./index.scss"

const { Meta } = Card
interface ProductCardProps {
  key: string
  Info: ProductType
  addProduct: () => void
}

const ProductCard = ({ addProduct, Info }: ProductCardProps) => {
  const description = (item: ProductType) => {
    return (
      <div className="productCard-footer">
        <span className="price">¥{item.price}</span>
        <Button type="primary" size="small" onClick={() => addProduct()}>
          加入购物车
        </Button>
      </div>
    )
  }
  return (
    <Card className="card" hoverable cover={<img alt="example" src={Img} />}>
      <Meta title={Info.productName} description={description(Info)} />
    </Card>
  )
}

export default ProductCard
