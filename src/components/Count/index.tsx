import React, { useState } from "react"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import "./index.scss"

interface CountType {
  count: number
  onChange: (val: number) => void
}

const Count = (props: CountType) => {
  return (
    <div className="count">
      <div className="count-item" onClick={() => props.onChange(-1)}>
        <MinusOutlined />
      </div>
      <div className="count-item">{props.count}</div>
      <div className="count-item" onClick={() => props.onChange(1)}>
        <PlusOutlined />
      </div>
    </div>
  )
}
export default Count
