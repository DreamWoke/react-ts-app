import React, { useState, useEffect } from "react"
import { Upload, Modal } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import Service from "@/service"

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener("load", () => resolve(reader.result))
    reader.addEventListener("error", (error) => reject(error))
  })
}

const PicturesWall = () => {
  const [param, setParam] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  })

  const handleCancel = () => {
    setParam({ ...param, previewVisible: false })
  }
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setParam({
      ...param,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.slice(Math.max(0, file.url.lastIndexOf("/") + 1)),
    })
  }

  const handleChange = ({ fileList }: any) => {
    console.log(fileList)
    setParam({ ...param, fileList })
  }
  const upload = (files: any) => {
    const { onSuccess } = files
    console.log(files.file)
    const formData = new FormData()
    formData.append("file", files.file)
    Service({
      url: "upload",
      data: formData,
      // responseType: "arraybuffer",
      headers: {
        "content-type": "multipart/form-data",
      },
    }).then(({ data }) => {
      onSuccess(data, data.data.url)
    })
  }
  const { previewVisible, previewImage, fileList, previewTitle } = param
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  useEffect(() => {
    console.log(param.fileList)
  }, [param.fileList])
  return (
    <>
      <Upload
        // action="/api/upload"
        customRequest={upload}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length > 0 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%", fontSize: "20px" }} src={previewImage} />
      </Modal>
    </>
  )
}

export default PicturesWall
