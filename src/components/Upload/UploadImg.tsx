import React, { useState } from "react"
import { Upload, Modal } from "antd"
import { UploadFile, RcCustomRequestOptions, UploadChangeParam } from "antd/lib/upload/interface"
import { PlusOutlined } from "@ant-design/icons"
import Service from "@/service"

interface PicturesWallPropType {
  files: Pick<UploadFile, "url">[]
  fileChange: (files: { url: string }[]) => void
}

const PicturesWall = (props: PicturesWallPropType) => {
  const [param, setParam] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  })
  // const [urlAddress, setUrlAddress] = useState<Pick<UploadFile, "url">[]>(props.files)
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleChange = (params: UploadChangeParam) => {
    setFileList(params.fileList)
  }
  const handleCancel = () => {
    setParam({ ...param, previewVisible: false })
  }
  const handlePreview = (file: UploadFile) => {
    setParam({
      previewImage: file.url as string,
      previewVisible: true,
      previewTitle: file.name || (file.url as string).slice(Math.max(0, (file.url as string).lastIndexOf("/") + 1)),
    })
  }
  const handleRemove = () => {
    setFileList([])
  }

  const upload = (files: RcCustomRequestOptions) => {
    const formData = new FormData()
    formData.append("file", files.file)
    Service({
      url: "upload",
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    }).then(({ data }) => {
      files.onSuccess({ url: data.data.url }, files.file)
      props.fileChange([{ url: data.data.url }])
    })
  }
  const { previewVisible, previewImage, previewTitle } = param
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }} />
    </div>
  )
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        customRequest={upload}
        onChange={handleChange}
        onPreview={handlePreview}
        onRemove={handleRemove}
      >
        {fileList?.length > 0 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%", fontSize: "20px" }} src={previewImage} />
      </Modal>
    </>
  )
}

export default PicturesWall
