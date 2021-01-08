import React, { useState } from "react"
import { PageHeader, Card, Form, Button, Input, InputNumber, message } from "antd"
import UploadImg from "Components/Upload/UploadImg"
import { UploadFile } from "antd/lib/upload/interface"
import { useHistory } from "react-router-dom"
import Service from "@/service"
import "./index.scss"

interface ProductType {
  productName: string
  price: number
  description: string
}
const AddProduct = () => {
  const history = useHistory()
  const [fileList, setFileList] = useState<UploadFile[] | any>([])
  const submitForm = (val: ProductType) => {
    Service({ url: "addProduct", data: { ...val, productImg: fileList[0].url } }).then(() => {
      message.success("新增成功")
      history.go(-1)
    })
  }
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 6 },
  }
  const btnLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 6, offset: 2 },
  }
  return (
    <div className="add-product">
      <PageHeader ghost={false} title="list" onBack={() => history.go(-1)} />
      <Card className="card-body">
        <Form {...layout} labelAlign="left" name="addProduct" onFinish={submitForm}>
          <Form.Item required label="商品名称" name="productName">
            <Input placeholder="请填写商品名称" />
          </Form.Item>
          <Form.Item required label="商品售价" name="price">
            <InputNumber min={0} max={10000000} />
          </Form.Item>
          <Form.Item required label="商品图片" name="productImg">
            <UploadImg
              fileList={fileList}
              fileChange={(uploadFiles: UploadFile[]) => {
                setFileList(uploadFiles)
              }}
            />
          </Form.Item>
          <Form.Item required label="描述" name="description">
            <Input.TextArea autoSize className="textarea" placeholder="请填写描述" />
          </Form.Item>
          <Form.Item {...btnLayout}>
            <Button type="primary" htmlType="submit">
              add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default AddProduct
