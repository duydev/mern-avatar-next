import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'
import SizeMe from 'react-sizeme'

class ImagePreview extends Component {
  constructor(props) {
    super(props)

    this.setEditorRef = this.setEditorRef.bind(this)
  }

  setEditorRef(editor) {
    this.editor = editor
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.requestCrop) {
      console.log('Cropped')
      const canvas = this.editor.getImage()
      this.props.handleCroppedImage(canvas.toDataURL())
    }
  }

  render() {
    const { size, frame, image, rotate, scale, onError } = this.props
    const wh = size.width

    const handleOnLoadFailure = () =>
      onError('Gặp lỗi trong quá trình tải ảnh lên. Vui lòng thử lại.')

    return (
      <div style={{ width: '100%' }}>
        <img
          ref="frame"
          id="frame"
          src={frame}
          alt="frame"
          width={wh}
          height={wh}
        />
        <AvatarEditor
          ref={this.setEditorRef}
          image={image}
          width={wh}
          height={wh}
          border={0}
          onLoadFailure={handleOnLoadFailure}
          rotate={rotate}
          scale={scale}
          crossOrigin="anonymous"
        />
      </div>
    )
  }
}

export default SizeMe()(ImagePreview)
