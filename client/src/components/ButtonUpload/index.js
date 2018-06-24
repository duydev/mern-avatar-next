import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonUpload = props => {
  const { onUpload, onError } = props

  // trigger input file click
  const performClick = () => {
    document.getElementById('btnUpload').click()
  }

  const handleUpload = e => {
    const ext = ['.jpg', '.jpeg', '.gif', '.png']
    const file = e.target.files[0]
    if (!file) return onError('Tập tin ảnh không tồn tại.')
    const fileName = file.name.toLowerCase()
    const found = ext.find(ext => fileName.endsWith(ext))
    if (!found)
      return onError('Tập tin này không được hỗ trợ. Vui lòng thử lại.')
    onUpload(file)
  }

  return (
    <div>
      <input
        type="file"
        id="btnUpload"
        onChange={handleUpload}
        className="hidden"
      />
      <Button bsStyle="primary" block={true} onClick={performClick}>
        Tải Ảnh Lên
      </Button>
    </div>
  )
}

export default ButtonUpload
