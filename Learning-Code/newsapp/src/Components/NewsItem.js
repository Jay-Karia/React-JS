import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, url, newsURL, author, date} = this.props
    let d= new Date(date)
    let newDate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={!url?'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930':url} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><span style={{fontWeight:'bolder'}}>By </span>{author!==""?"Unknown":author} <span style={{fontWeight: 'bolder '}}> On </span>{new Date(date).toUTCString()}</p>
            <p className="card-text">{description}</p>
            <a href={newsURL} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </>
    );
  }
}

// Video 32 7:07