import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Layout, Menu, Image } from "antd"
import { UserOutlined } from "@ant-design/icons"
import LogoImg from "@/image/react.png"
import "./index.scss"

const { Header, Sider } = Layout

const BaseLayout = (props: any) => {
  const history = useHistory()
  const [selectKey, setSelectKey] = useState("")
  useEffect(() => {
    // 路由守卫写在这里？如果只是业务代码鉴权的话可行
    setSelectKey("first")
    console.log(history)
  }, [history])
  const handleClick = (e: any) => {
    setSelectKey(e.key)
  }
  return (
    <Layout className="basic-layout">
      <Header className="header">
        <span className="logo">
          <Image className="logo-img" src={LogoImg} />
        </span>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            onSelect={handleClick}
            selectedKeys={[selectKey]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="first" icon={<UserOutlined />}>
              <Link to="/first">first</Link>
            </Menu.Item>
            <Menu.Item key="second" icon={<UserOutlined />}>
              <Link to="/second">second</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="content">{props.children}</Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
