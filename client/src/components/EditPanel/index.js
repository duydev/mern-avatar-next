import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import ButtonUpload from '../ButtonUpload'

const ImagePanel = props => {
  const { onUpload, onEdit, onSave, onError } = props

  const handleRotateLeft = () => onEdit('rotate', 'left')
  const handleRotateRight = () => onEdit('rotate', 'right')
  const handleZoomIn = () => onEdit('zoom', 'in')
  const handleZoomOut = () => onEdit('zoom', 'out')
  const handleReset = () => onEdit('reset', '')

  return (
    <div>
      <ButtonUpload onUpload={onUpload} onError={onError} />
      <Row>
        <Col md={6}>
          <Button block={true} onClick={handleRotateLeft}>
            Xoay Trái
          </Button>
        </Col>
        <Col md={6}>
          <Button block={true} onClick={handleRotateRight}>
            Xoay Phải
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Button block={true} onClick={handleZoomIn}>
            Phóng To
          </Button>
        </Col>
        <Col md={6}>
          <Button block={true} onClick={handleZoomOut}>
            Thu Nhỏ
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button bsStyle="warning" block={true} onClick={handleReset}>
            Trở Lại Như Cũ
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button bsStyle="success" block={true} onClick={onSave}>
            Hoàn Thành
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default ImagePanel
