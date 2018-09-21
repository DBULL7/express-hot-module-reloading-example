import React, { Component } from 'react'
import About from './About/About'
const ReactDOM = require('react-dom')

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <h2>Why didn't I update </h2>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <div>
      <h1>Why hello there:</h1>
      <About/>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

if (module.hot) {
  console.clear()
  module.hot.accept();
}