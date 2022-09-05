import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="container">
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
    )
  }
}
