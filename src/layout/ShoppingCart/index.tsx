import React from "react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"
import { addCount } from "@/redux/action"
import { Badge } from "antd"
import "./index.scss"

const ShoppingCart = () => {
  const count = useSelector((state: any) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className="shopping-cart">
        <Badge count={count} offset={[6, 0]} size="small">
          <ShoppingCartOutlined className="svg-cart" />
        </Badge>
      </div>
    </>
  )
}
export default ShoppingCart