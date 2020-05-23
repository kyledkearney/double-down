import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'

export default class Header extends Component {
render () {
  return (
    
    <Row className='header-row'>
    <Col xl={6}>
    <h1>{this.props.pageTitle}</h1>
    </Col>
    <Col>
    </Col>
    </Row>
  )
}
}
