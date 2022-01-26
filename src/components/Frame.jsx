import React from "react";
import logoIcon from '../assets/svg/logoIcon.svg'
import reservation from "../assets/svg/reservation.svg"
import acces from "../assets/svg/acces.svg"

const Frame=()=>{
    return(
        <div>
        
            <div className="aside--frame">  
            <div className="contain--button--frame">
        
                    <img className="logoIcon" src={logoIcon} alt="logo"/>
     
                <button className="button--frame">
                    <img src={reservation} alt="icon reservation"/>
                    <p>Réservation</p>
                </button>
                <button>
                    <img id="button--frame" src={acces} alt="icon acces"/>    
                    <p>Accès</p>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Frame