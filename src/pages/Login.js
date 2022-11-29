import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/img/motorshop_logo.png";
import "./Login.css";

class Login extends Component {
    state = {
        token: " ",
        status: false
    };

    getToken  = (event) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        const options = { method: 'POST' };

        fetch(`https://login-normal.onrender.com/api/login?email=${email}&password=${password}`, options)
            .then(response => response.json())
            .then(response => {
                if (response.Message) {
                    alert(response.Message);
                } else {
                    this.setState( { 
                        token: `${response.token}`, 
                        status: true 
                    } );
                }
                console.log(`Email: ${email} \nPassword: ${password}`);
                console.log(this.state.token);
            })    
    }

    render() {
        return (
            <div className="background">
                <div class="header">
                    <div class="inner-header flex">
                        <div class="login">
                            <Link to="/">
                                <img src={logo} alt="logo motorshop" />
                            </Link>

                            <form onSubmit={this.getToken} class="flex">
                                <h2>¡Accede a tu cuenta!</h2>
                                <label htmlFor="e-mail">
                                    <input
                                        type="text"
                                        name="email"
                                        id="e-mail"
                                        placeholder="Correo eléctronico"
                                    />
                                </label>
                                <label htmlFor="pass">
                                    <input
                                        type="password"
                                        name="password"
                                        id="pass"
                                        placeholder="Contraseña"
                                    />
                                </label>
                                <Link to="/singup">Registrarse.</Link>

                                <input type="submit" class="login-btn" value="Iniciar sesión" />
                            </form>
                        </div>
                    </div>
                </div>

                <div class="content flex">
                    <p>Motorshop | Venta de automóviles </p>
                </div>
            </div>
        );
    }
}

export default Login;
