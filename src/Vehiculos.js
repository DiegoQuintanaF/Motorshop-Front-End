import React, { Component } from "react";
import { Link } from "react-router-dom";
import BtnBold from "./components/BtnBold";
import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";
import vehicle1 from "./assets/img/stock1.png";
import vehicle2 from "./assets/img/stock2.png";
import vehicle3 from "./assets/img/stock3.png";
import vehicle4 from "./assets/img/stock4.png";
import "./Vehiculos.css";


const vehicles_list = [
    {
        title: "Toyota Prado",
        price: "56,970.000,00"
    },
    {
        title: "Toyota Prado",
        price: "56,970.000,00"
    },
    {
        title: "Toyota Prado",
        price: "56,970.000,00"
    },
    {
        title: "Toyota Prado",
        price: "56,970.000,00"
    }
]




class Vehiculos extends Component {
    render() {
        return (
            <div>
                <NavComponent />
                <div className="vehicles-container">
                    <h3>Nuestro catalogo.</h3>
                    <div className="vehicles-list">
                        {
                            vehicles_list.map((vehicle, vehicleIndex) => {
                                return (
                                    <Link to={`#vehicle${vehicleIndex+1}`} >
                                        <div className="vehicle-list__item">
                                            <img src={vehicle1} alt="Un carrito" />
                                            <h4>{vehicle.title}</h4>
                                            <p>$ {vehicle.price} COP</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }






                        {/* <Link to="#vehicle2" >
                            <div className="vehicle-list__item">
                                <img src={vehicle1} alt="Un carrito" />
                                <h4>Toyota Carolla</h4>
                                <p>$ 56.970.000,00 COP</p>
                            </div>
                        </Link> */}

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Vehiculos;