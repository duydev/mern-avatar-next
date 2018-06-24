import React, { Component } from 'react'

class ResultPreview extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { frame, image } = this.props

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    const _image = new Image()
    _image.onload = () => {
      ctx.drawImage(_image, 0, 0)
      let _frame = new Image()
      _frame.crossOrigin = 'Anonymous'
      _frame.onload = () => {
        ctx.drawImage(_frame, 0, 0)
        console.log(canvas.toDataURL())
      }
      _frame.src = frame
    }
    _image.src = image
  }

  render() {
    return <canvas id="canvas" width={2048} height={2048} />
  }
}

export default ResultPreview
