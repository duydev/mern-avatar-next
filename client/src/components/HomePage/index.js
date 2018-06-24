import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import ErrorMessage from '../ErrorMessage'
import ImagePreview from '../ImagePreview'
import EditPanel from '../EditPanel'
import ResultModal from '../ResultModal'

const initialImageParams = {
  rotate: 0,
  scale: 1
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: 'http://ctxhhutech.com/avatar/uploads/khung-4.png',
      image:
        'http://sohanews.sohacdn.com/k:thumb_w/640/2015/11-1431488258564/chi-ruot-nong-bong-vuot-mat-ngoc-trinh.jpg',
      croppedImage: null,
      ...initialImageParams,
      save: false,
      modalShow: false,
      error: null
    }

    this.handleUpload = this.handleUpload.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleError = this.handleError.bind(this)
    this.handleCroppedImage = this.handleCroppedImage.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleUpload(file) {
    this.setState({ image: file, error: null })
  }

  handleEdit(action, value) {
    let x
    switch (action) {
      case 'rotate':
        x = value === 'right' ? 1 : -1
        const rotate = this.state.rotate + x * 90
        this.setState({ rotate })
        break
      case 'zoom':
        x = value === 'in' ? 1 : -1
        let scale = this.state.scale + x * 0.1
        if (scale < 0) scale = 0
        this.setState({ scale })
        break
      default:
        // reset
        this.setState({ ...initialImageParams })
    }
  }

  handleSave() {
    this.setState({ save: true })
  }

  handleError(message) {
    this.setState({ error: message })
  }

  handleCroppedImage(croppedImage) {
    this.setState({ croppedImage, save: false, modalShow: true })
  }

  handleCloseModal() {
    this.setState({ modalShow: false })
  }

  render() {
    const {
      frame,
      image,
      rotate,
      scale,
      modalShow,
      save,
      croppedImage
    } = this.state
    return (
      <div>
        <Grid className="pages page-home">
          <Row>
            <Col md={7}>
              <ImagePreview
                frame={frame}
                image={image}
                rotate={rotate}
                scale={scale}
                onError={this.handleError}
                requestCrop={save}
                handleCroppedImage={this.handleCroppedImage}
              />
            </Col>
            <Col md={5}>
              <ErrorMessage message={this.state.error} />
              <EditPanel
                onUpload={this.handleUpload}
                onEdit={this.handleEdit}
                onSave={this.handleSave}
                onError={this.handleError}
              />
            </Col>
          </Row>
        </Grid>
        <ResultModal
          show={modalShow}
          frame={frame}
          image={croppedImage}
          onClose={this.handleCloseModal}
        />
      </div>
    )
  }
}

export default HomePage
