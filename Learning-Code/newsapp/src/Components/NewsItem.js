import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, url, newsURL} = this.props
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={!url?'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930':url} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
