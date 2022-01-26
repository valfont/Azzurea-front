import React from "react";
import etape from "../assets/svg/etape.svg";

export default function InfoPerso() {
  return (
    //   ------------------------------- Block div Droite -------------------------------
    <div className="blockRight">
      <div className="etape">
        <img src={etape} />
      </div>
      <form className="formInfoPerso">
        <h4 className="h4V">3. Je rentre mes informations</h4>
        <div className="blockInput1">
          <div className="input-style2">
            <input type="text" placeholder="Nom" />
          </div>
          <div className="input-style2">
            <input type="text" placeholder="Prenom" />
          </div>
        </div>
        <div className="blockInput1">
          <div className="input-style2">
            <input type="tel" placeholder="Telephone" />
          </div>
          <div className="input-style2">
            <input type="mail" placeholder="Email" />
          </div>
        </div>
        <div className="input-style2">
          <input type="text" placeholder="Numero de Vol" />
        </div>
        <div className="input-style-textarea">
          <textarea
            id="story"
            name="story"
            className="textarea"
            placeholder="Informations Complémentaires"
          ></textarea>
        </div>
        {/* --------------------------------------- Cout Total ---------------------------------- */}
        <div className="total">
          <p className="pTotal">Coût Total</p>
          <p className="pTotal">350 €</p>
        </div>
        <div className="blockButton">
          <button className="buttonQuitter" type="submit">
            Retour
          </button>
          <button className="buttonContinuer2" type="submit">
            Terminer ma Reservation
          </button>
        </div>
      </form>
    </div>
  );
}
