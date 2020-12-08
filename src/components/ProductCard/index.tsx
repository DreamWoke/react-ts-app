import React from "react"
import { Card, Button } from "antd"
import Img from "@/image/product.png"
import "./index.scss"

const { Meta } = Card
type dataType = {
  id: string
  name: string
  price: number
}
interface ProductCardProps {
  key: string
  Info: dataType
  addProduct: () => void
}

const ProductCard = ({ addProduct, Info }: ProductCardProps) => {
  const description = (item: dataType) => {
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
      <Meta title="Europe Street beat" description={description(Info)} />
    </Card>
  )
}

export default ProductCard
