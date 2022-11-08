import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';


class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
    );
  }
}

export default App
