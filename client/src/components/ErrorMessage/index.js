import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = props => {
  const { message } = props
  return message !== null ? <Alert bsStyle="danger">{message}</Alert> : null
}

export default ErrorMessage
