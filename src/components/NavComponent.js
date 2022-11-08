import React, { Component } from 'react';
import NavBar from './NavBar.js';
import NavBarLeft from './NavBarLeft.js';
import NavBarRight from './NavBarRight.js';
import NavLogo from './NavLogo.js';
import NavItem from './NavItem.js';
import NavShoppingCart from './NavShoppingCart.js';
import NavSingUp from './NavSingUp.js';

class NavComponent extends Component {
  render() {
    return (
      <NavBar>
        <NavBarLeft>
          <NavLogo href="#inicio" />
          <NavItem href="#Vehiculos">Vehículos</NavItem>
          <NavItem href="#Cotizar">Cotizar</NavItem>
        </NavBarLeft>
        <NavBarRight>
          <NavShoppingCart />
          <NavItem href="/login">Log In</NavItem>
          <NavSingUp href="#SingUp">Sing Up</NavSingUp>
        </NavBarRight>
      </NavBar>
    );
  }
}

export default NavComponent;
