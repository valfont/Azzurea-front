import React from "react";
import logo from "../assets/svg/logo.svg"
import "../style/login.css"


const Login=()=>{
    return(
        <div>
            <div className="container--login">
                <img src={logo} alt="logo" />
              
                <form className="form--login">  
                <h1>Connectez-vous</h1>
                <h3>à votre tableau de bord</h3>
                    <p>Adresse Email</p>
                    <input type="text" id="mail"/>
                    <p>Mot de passe</p>
                    <input type="password" id="password" />
                    <a href="contact">Mot de passe oublié?</a>
                    <button className="submit--login" type="submit" >Connexion</button>
                </form>
            </div>
        </div>
    )
}

export default Login