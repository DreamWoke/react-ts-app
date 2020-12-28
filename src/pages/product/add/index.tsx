import React from "react"
import { PageHeader, Card, Form, Button, Input } from "antd"
import UploadImg from "Components/Upload/UploadImg"
import { useHistory } from "react-router-dom"
import "./index.scss"

const AddProduct = () => {
  const history = useHistory()
  const submitForm = (val: any) => {
    console.log(val)
  }
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 6 },
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
            <Input placeholder="请填写商品售价" />
          </Form.Item>
          <Form.Item required label="商品图片" name="productImg">
            <UploadImg />
          </Form.Item>
          <Form.Item required label="描述" name="description">
            <Input.TextArea autoSize className="textarea" placeholder="请填写描述" />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default AddProduct
