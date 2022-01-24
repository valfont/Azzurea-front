import React from "react"
import date from "../assets/svg/date.svg"
import heure from "../assets/svg/heure.svg"
import depart from "../assets/svg/depart.svg"

const Form=()=>{
    return(
        <form className="form">
        <div className="radio">
            <div className="input-radio-style"><input type="radio" name="reservation" value="reserver" id="1"/>
            <label htmlFor="1">Réserver votre trajet</label></div>
            
            <div className="input-radio-style">  <input type="radio" name="reservation" value="mad" id="2"/>
            <label htmlFor="2">Mise à disposition</label></div>
          
            <div className="input-radio-style">     <input type="radio" name="reservation" value="reserverMad" id="3"/>
            <label htmlFor="3">Réserver votre trajet + Mise à disposition</label></div>
       
        </div>
        <div className="input-style">
            <img src={date} alt="icon" />
            <input type="text" placeholder="Date"/>
        </div>   
        <div className="input-style">
            <img src={heure} alt="icon" />
            <input type="text" placeholder="Heure"/>
        </div>
        <div className="input-style">
        <img src={depart} alt="icon" />
            <input type="text" placeholder="Départ"/>
        </div>
        <div className="input-style">
        <img src={depart} alt="icon" />
            <input type="text" placeholder="Arrivée"/>
        </div>
        <div className="input-style-radio2">     
            <input type="radio" name="trajet" value="Aller" id="aller"/>
            <label htmlFor="aller">Trajet Aller</label>
            <input type="radio" name="trajet" value="AllerRetour" id="allerretour"/>
            <label htmlFor="3">Trajet Aller-Retour</label>
        </div>
        <div className="submit-container"><button className="submit" type="submit">Continuer</button></div>
        
    </form>
    )
}

export default Form