import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Layout, Menu, Image } from "antd"
import { UserOutlined } from "@ant-design/icons"
import LogoImg from "@/image/react.png"
import Service from "@/service"
import Axios from "axios"
import ShoppingCart from "./ShoppingCart"
import "./index.scss"

const { Header, Sider } = Layout

const BaseLayout = (props: any) => {
  // const dispatch = useDispatch()
  // const countx = useSelector((state: any) => state.countx)
  const history = useHistory()
  const [selectKey, setSelectKey] = useState("")
  useEffect(() => {
    // 路由守卫写在这里？如果只是业务代码鉴权的话可行
    setSelectKey("cars")
    console.log(history)
    Service({ url: "login", data: { name: "root", password: "123456" } })
    // Axios.get("/api/login")
  }, [history])
  const handleClick = (e: any) => {
    setSelectKey(e.key)
  }
  return (
    <Layout className="basic-layout">
      <Header className="header">
        <span className="logo">
          <Image preview={false} className="logo-img" src={LogoImg} />
        </span>
        <div className="header-right">
          <ShoppingCart />
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            onSelect={handleClick}
            selectedKeys={[selectKey]}
            style={{ height: "100%", borderRight: 0 }}
            className="sider-menus"
          >
            <Menu.Item key="cars" icon={<UserOutlined />}>
              <Link to="/cars">cars</Link>
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
