import React, { useEffect, useState } from "react"
import { Button, Form, Input } from "antd"
import "./index.scss"
import Service from "@/service"

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
}
interface loginFormType {
  name: string
  password: string
}
const Login = () => {
  const [formData, setFormData] = useState<loginFormType>({
    name: "",
    password: "",
  })
  useEffect(() => {
    // Service({ url: "login", data: { name: "root", password: "123456" } })
  }, [])
  const loginSubmit = (form: loginFormType) => {
    console.log(form)
  }
  // const onFinishFailed = () => {
  //   console.log("fas")
  // }
  return (
    <div>
      <div className="login">
        <div className="login-content">
          <div className="login-logo" />
          <div className="login-inner">
            <div className="header">登录</div>
            <div className="body">
              <Form
                {...layout}
                labelAlign="left"
                name="loginForm"
                className="login-form"
                onFinish={loginSubmit}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item name="name" rules={[{ required: true, message: "请输入用户名!" }]}>
                  <Input className="user-input" bordered={false} placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
                  <Input.Password className="password-input" bordered={false} placeholder="请输入密码" />
                </Form.Item>
                <Form.Item className="btn-group" {...tailLayout}>
                  <Button className="login-submit" type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="login-footer" />
      </div>
    </div>
  )
}

export default Login
