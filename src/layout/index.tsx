import React, { useEffect, useState } from "react"
import { getToken } from "@/utils/token"
import { Layout, Menu } from "antd"
import { Link, useHistory } from "react-router-dom"
import Icon, { UserOutlined } from "@ant-design/icons"
import CandySvg from "@/common/svgComponents/CandySvg"
import { userInfo } from "@/redux/action"
import { useDispatch } from "react-redux"
import ShoppingCart from "./ShoppingCart"
import SlideMap from "./constants"
import "./index.scss"

const { Header, Sider } = Layout
const BaseLayout = (props: any) => {
  const dispatch = useDispatch()

  const history = useHistory()
  const [selectKey, setSelectKey] = useState<string>("")

  useEffect(() => {
    const { location } = history
    const activeSlide = SlideMap.find((item) => item.pathname === location.pathname)
    setSelectKey(activeSlide?.key || SlideMap[0].key)
    const token = getToken()
    if (token) {
      // 获取用户信息存到redux中
      dispatch(userInfo())
    } else {
      history.push("/login")
    }
  }, [history])

  const handleClick = (e: any) => {
    setSelectKey(e.key)
  }
  return (
    <Layout className="basic-layout">
      <Header className="header">
        <span className="logo">
          <Icon component={() => <CandySvg width="40" height="40" />} style={{ height: "100%" }} className="logo-img" />
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
            {SlideMap.map((item) => {
              return (
                <Menu.Item key={item.key} icon={<UserOutlined />}>
                  <Link to={item.pathname}>{item.name}</Link>
                </Menu.Item>
              )
            })}
            {/* <Menu.Item key="cars" icon={<UserOutlined />}>
              <Link to="/cars">cars</Link>
            </Menu.Item> */}
            {/* <Menu.Item key="second" icon={<UserOutlined />}>
              <Link to="/second">second</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="content">{props.children}</Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
