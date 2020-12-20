import React from "react"
import { Dropdown, Menu } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { actionCreator, actionTypes } from "@/redux/action"
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"
// import UserMenu from "./UserMenu"

import "./index.scss"

const ShoppingCart = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleMenuClick = () => {}
  const Logout = async () => {
    dispatch(actionCreator(actionTypes.ASYNC_LOGOUT))
    history.push("/login")
  }
  const userInfo = useSelector((state: any) => state.userInfo)
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={Logout}>
        退出系统
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <div className="user">
        <UserOutlined className="svg-user" />
        <div className="username">{userInfo?.name}</div>
      </div>
    </Dropdown>
  )
}
export default ShoppingCart
