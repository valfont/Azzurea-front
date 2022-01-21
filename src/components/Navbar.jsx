import React from "react";
import logo from "../assets/svg/logo.svg"

const Navbar =()=>{
    return(
        <header>
              <img className="logo" src={logo} alt="logo" />
                <nav>
                    <a className="reservation" href="#Reservation">Réservation</a>
                    <a className="nosvaleurs" href="#NosValeurs">Nos valeurs</a>
                    <a className="nosflottes" href="#NosFlottes">Nos flottes</a>
                    <a className="contact" href="#Contact">Contact</a>
                    <button className="telephone" ><i className="fas fa-phone-alt"></i> +33 01 00 00 00 00</button>
                </nav>
        </header>
    )
}

export default Navbar