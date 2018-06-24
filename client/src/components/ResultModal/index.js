import React from 'react'
import { Modal } from 'react-bootstrap'

import ResultPreview from '../ResultPreview'

const ResultModal = props => {
  const { show, onClose, image, frame } = props

  return (
    <Modal show={show} bsSize="large">
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title>Kết Quả</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ResultPreview frame={frame} image={image} />
        {/* <img src={image} alt="avatar" className="img-responsive" /> */}
        <a className="btn btn-success" download="avatar.png" href={image}>
          Tải về
        </a>
      </Modal.Body>
    </Modal>
  )
}

export default ResultModal
