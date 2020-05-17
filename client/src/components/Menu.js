import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import Axios from 'axios'

export default class Home extends Component {

  componentDidMount() {
    fetch('/hello')
      .then(console.log(res))
  }

render () {



  return(
    <Row className='main-menu-row'>
      <Col xl={3} className='align-content-center justify-content-center main-menu-col'>
        <h1>doubledown.io</h1>
        <h3 className='main-menu-item'><a href="/play">Play</a></h3>
        <h3 className='main-menu-item'><a href="/login">Login</a></h3>
        <h3 className='main-menu-item'><a href="/tutorial">Tutorial</a></h3>
        <h3 className='main-menu-item'><a href="/leaderboard">Leaders</a></h3>
      </Col>
    </Row>
  )
}
}
