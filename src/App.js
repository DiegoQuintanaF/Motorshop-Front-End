import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import SingUp from './SingUp.js';
import Vehiculos from './Vehiculos.js';
import Cotizar from './Cotizar.js';
import Carrito from './Carrito.js';


class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/singup" element={<SingUp />} /> 
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path='/cotizar' element={<Cotizar />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </div>
    );
  }
}

export default App
