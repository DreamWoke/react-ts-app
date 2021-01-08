import React, { useState } from "react"
import { Upload, Modal } from "antd"
import { UploadFile } from "antd/lib/upload/interface"
import { PlusOutlined } from "@ant-design/icons"
import Service from "@/service"

interface PicturesWallPropType {
  fileList: Pick<UploadFile, "url">[]
  fileChange: (uploadFiles: UploadFile[]) => void
}

// function getBase64(file: any) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.addEventListener("load", () => resolve(reader.result))
//     reader.addEventListener("error", (error) => reject(error))
//   })
// }

const PicturesWall = (props: PicturesWallPropType) => {
  const [param, setParam] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  })
  const [fileList, setFileList] = useState<UploadFile[] | any>(props.fileList || [])

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
  const uploadSuccess = (file: UploadFile, url: string) => {
    const { uid, type, size, name } = file
    const files: UploadFile[] = [
      {
        uid,
        type,
        size,
        name,
        status: "done",
        url,
      },
    ]
    setFileList(files)
    props.fileChange(files)
  }

  const upload = (files: any) => {
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
      // onSuccess()
      uploadSuccess(files.file, data.data.url)
    })
  }
  const { previewVisible, previewImage, previewTitle } = param
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  return (
    <>
      <Upload
        customRequest={upload}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onRemove={handleRemove}
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
