import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, Input } from "antd"
import { setToken } from "@/utils/token"
import Service from "@/service"

import "./index.scss"

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
  const history = useHistory()
  const [loading, setLoading] = useState<boolean>(false)
  const loginSubmit = (form: loginFormType) => {
    setLoading(true)
    Service({ url: "login", data: form })
      .then(({ data }) => {
        setToken(data.token)
        setLoading(false)
        history.push("/product")
      })
      .catch(() => {
        setLoading(false)
      })
  }
  return (
    <div>
      <div className="login">
        <div className="login-content">
          <div className="login-logo" />
          <div className="login-inner">
            <div className="header">LOGIN</div>
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
                  <Button className="login-submit" loading={loading} type="primary" htmlType="submit">
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
