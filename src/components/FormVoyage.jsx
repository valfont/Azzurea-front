import React from "react";
import etape from "../assets/svg/etape.svg";
import dateBlack from "../assets/svg/dateBlack.svg";
import heureBlack from "../assets/svg/heureBlack.svg";
import localisationBlack from "../assets/svg/localisationBlack.svg";

export default function FormVoyage() {
  return (
    <div className="blockRight">
      <div className="etape">
        <img src={etape} />
      </div>
      <form className="formVoyage">
        <h4 className="h4V">1. Je planifis mon voyage</h4>
        <div className="radio">
          <div className="input-radio-style2">
            <input type="radio" name="reservation" value="reserver" id="1" />
            <label htmlFor="1">Réserver votre trajet</label>
          </div>

          <div className="input-radio-style2">
            {" "}
            <input type="radio" name="reservation" value="mad" id="2" />
            <label htmlFor="2">Mise à disposition</label>
          </div>

          <div className="input-radio-style2">
            {" "}
            <input type="radio" name="reservation" value="reserverMad" id="3" />
            <label htmlFor="3">
              Réserver votre trajet + Mise à disposition
            </label>
          </div>
        </div>
        <div className="blockInput1">
          <div className="input-style2">
            <img src={dateBlack} alt="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <div className="input-style2">
            <img src={heureBlack} alt="icon" />
            <input type="text" placeholder="Heure" />
          </div>
        </div>
        <div className="input-style2">
          <img src={localisationBlack} alt="icon" />
          <input type="text" placeholder="Depart" />
        </div>
        <div className="input-style2">
          <img src={localisationBlack} alt="icon" />
          <input type="text" placeholder="Arrivé" />
        </div>
        <div className="radio2">
          <div className="input-radio-style3">
            <input type="radio" name="reservation" value="Allez" id="4" />
            <label htmlFor="4">Trajet Allez</label>
          </div>
          <div className="input-radio-style3">
            <input type="radio" name="reservation" value="AllezRetour" id="5" />
            <label htmlFor="5">Trajet Allez-Retour</label>
          </div>
        </div>
        <div className="blockButton">
          <button className="buttonQuitter" type="submit">
            Quitter
          </button>
          <button className="buttonContinuer" type="submit">
            Continuer
          </button>
        </div>
      </form>
    </div>
  );
}
