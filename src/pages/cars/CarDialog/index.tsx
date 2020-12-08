import React, { useEffect, useState } from "react"
import Count from "Components/Count"
import { Modal, Button } from "antd"
import "./index.scss"

interface CarDialogType {
  title: string
  visible: boolean
  Info: any
  onCancel: () => void
}

const CarDialog = (props: CarDialogType) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [count, setCount] = useState<number>(1)
  const handleOk = () => {
    // 把商品信息+数量传给
    console.log(props, count)
  }
  useEffect(() => {
    console.log(props)
  }, [])
  const afterClose = () => {
    setCount(1)
  }
  const renderCount = () => {
    return (
      <div className="car-dialog-footer">
        <Count count={count} onChange={(val) => setCount(count + val)} />
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          添加
        </Button>
      </div>
    )
  }

  return (
    <Modal
      visible={props.visible}
      maskClosable={false}
      afterClose={afterClose}
      title={props.title}
      onCancel={props.onCancel}
      onOk={handleOk}
      footer={renderCount()}
    >
      {props.Info}
    </Modal>
  )
}

export default CarDialog
