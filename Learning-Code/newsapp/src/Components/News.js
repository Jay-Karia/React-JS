import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalArticles: 0,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e0915fa6d785405690bceaab3b54c2c7&page=${this.state.page}&pageSize=20&category=${this.props.category}`;
      this.setState({
        loading: true
      })
    let response = await fetch(url);
    let parsed = await response.json();
    this.setState({
      articles: parsed.articles,
      totalArticles: parsed.totalArticles,
    });
    this.setState({loading: false})
   
  }
  handlePre = async () => {
    this.setState({
      page: this.state.page-1
    })
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e0915fa6d785405690bceaab3b54c2c7&page=${this.state.page-1}&pageSize=20&category=${this.props.category}`;
    this.setState({
      loading: true
    })
  let response = await fetch(url);
  let parsed = await response.json();
  this.setState({
    articles: parsed.articles,
    totalArticles: parsed.totalArticles,
  });
  this.setState({loading: false})
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page+1
    })
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e0915fa6d785405690bceaab3b54c2c7&page=${this.state.page+1}&pageSize=20&category=${this.props.category}`;
    this.setState({
      loading: true
    })
  let response = await fetch(url);
  let parsed = await response.json();
  this.setState({
    articles: parsed.articles,
    totalArticles: parsed.totalArticles,
  });
  this.setState({loading: false})
  };
  render() {
   
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">NewsExplorer Top <span style={{color:'green'}}>{this.props.category}</span> Headlines</h1>
          <div className="text-center">
          {this.state.loading && <Spinner/>}

          </div>
          <div className="row">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title={e.title}
                    description={e.description}
                    url={e.urlToImage}
                    newsURL={e.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <div
              disabled={this.state.page <= 1} onClick={this.handlePre} className="btn btn-dark"> &larr; Previous</div>
            <div className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</div>
          </div>
        </div>
      </>
    );
  }
}