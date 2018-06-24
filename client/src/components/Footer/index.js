import React from 'react'

import moment from 'moment'

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        &copy; {moment().format('Y')} - Xây dựng và phát triển bởi{' '}
        <a href="https://duydev.me" target="_blank">
          Trần Nhật Duy
        </a>.
      </p>
    </footer>
  )
}

export default Footer
