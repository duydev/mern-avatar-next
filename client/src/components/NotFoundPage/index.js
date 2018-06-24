import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <Grid className="pages page-not-found">
      <Row>
        <Col md={12}>
          <h1>Oops... Page not found!!!</h1>
        </Col>
      </Row>
    </Grid>
  )
}

export default NotFoundPage
