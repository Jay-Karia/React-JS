import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router, Routes, Link, Route
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News country="in" category=""/>}></Route>
          <Route exact path="/technology" element={<News country="in" category="technology"/>}></Route>
          <Route exact path="/sports" element={<News country="in" category="sports"/>}></Route>
          <Route exact path="/entertainment" element={<News country="in" category="entertainment"/>}></Route>
          <Route exact path="/science" element={<News country="in" category="science"/>}></Route>
          <Route exact path="/business" element={<News country="in" category="business"/>}></Route>
          <Route exact path="/health" element={<News country="in" category="health"/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}
