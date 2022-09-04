import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Jay"
  render() {
    return (
      <div>Hello my first class based component by: {this.c}</div>
    )
  }
}
