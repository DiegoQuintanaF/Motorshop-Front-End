import React, { Component } from "react";
import shopping_cart from "../assets/icons/shopping-cart.svg";
import "./NavBar.css";

class NavShoppingCart extends Component {
    render() {
        return (
            <li class="navbar__nav-item shopping--cart">
                <img src={shopping_cart} alt="shopping_cart" />
                <span class="shopping--cart__counter">
                    2
                </span>
            </li>
        );
    }
}

export default NavShoppingCart;