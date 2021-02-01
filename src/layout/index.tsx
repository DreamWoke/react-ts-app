import React, { useEffect, useState } from "react"
import { getToken } from "@/utils/token"
import { Layout, Menu } from "antd"
import { Link, useHistory } from "react-router-dom"
import Icon, { UserOutlined } from "@ant-design/icons"
import CandySvg from "@/common/svgComponents/CandySvg"
import { actionCreator, actionTypes } from "@/redux/action"
import { useDispatch } from "react-redux"
import ShoppingCart from "./ShoppingCart"
import User from "./User"
import SlideMap from "./constants"
import "./index.scss"

const { Header, Sider } = Layout
const BaseLayout = (props: any) => {
  const dispatch = useDispatch()

  const history = useHistory()
  const [selectKey, setSelectKey] = useState<React.Key>()

  useEffect(() => {
    const { location } = history
    const activeSlide = SlideMap.find((item) => item.pathname === location.pathname)
    // setSelectKey(activeSlide?.key || SlideMap[0].key)
    const token = getToken()
    if (token) {
      // 获取用户信息存到redux中
      dispatch(actionCreator(actionTypes.ASYNC_SAVEUSERINFO))
    } else {
      history.push("/login")
    }
  }, [history])

  const handleClick = (e: { key: React.Key }) => {
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
          <User />
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
          </Menu>
        </Sider>
        <Layout className="content">{props.children}</Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
