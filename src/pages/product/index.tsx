import React, { useEffect, useState } from "react"
import { PageHeader, Card } from "antd"
import CarDialog from "@/pages/product/CarDialog"
import ProductCard from "Components/ProductCard"
import Service from "@/service"
import { ProductType } from "@/service/modules/product"
import "./index.scss"

const Product = () => {
  const [dataList, setDataList] = useState<ProductType[]>([])
  const [dialogVisible, setDialogVisible] = useState<boolean>(false)
  const [chooseInfo, setChooseInfo] = useState<ProductType>()
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = () => {
    Service({ url: "getProduct", method: "GET" }).then(({ data }) => {
      console.log(data.data)
      setDataList(data.data)
    })
  }
  const openDialog = (Info: ProductType) => {
    setChooseInfo(Info)
    setDialogVisible(true)
  }
  const renderDialogBody = () => {
    return (
      <>
        <div>商品ID:{chooseInfo?.productId}</div>
        <div>商品名称:{chooseInfo?.productName}</div>
        <div>价格:¥{chooseInfo?.price}</div>
        <div>描述:{chooseInfo?.description}</div>
      </>
    )
  }
  return (
    <>
      <PageHeader ghost={false} title="商品列表" />
      <Card className="card-body">
        <div className="car-card">
          {dataList.map((item) => {
            return <ProductCard key={item.productId} Info={item} addProduct={() => openDialog(item)} />
          })}
        </div>
      </Card>
      <CarDialog
        visible={dialogVisible}
        title="添加到购物车"
        Info={renderDialogBody()}
        onCancel={() => setDialogVisible(false)}
      />
    </>
  )
}

export default Product
