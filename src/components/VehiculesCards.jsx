import React from "react";
import "../style/card.css";
import etape from "../assets/svg/etape.svg";
import berline from "../assets/svg/berline.svg";
import limousine from "../assets/svg/limousine.svg";
import Card from "../components/Card";

export default function VehiculesCards() {
  return (
    <div className="blockRight">
      <div className="etape">
        <img src={etape} />
      </div>
      <h4 className="h4V">2. JE CHOISIS MES VEHICULES</h4>
      <div className="cardContainer">
        <Card
          title="Berlines"
          classe="Classe E (ou similaire)"
          image={berline}
          texte="MAX 3 PERSONNES"
          texte2="2 BAGAGES"
        />
        <Card
          title="Limousines"
          classe="Classe S (ou similaire)"
          image={limousine}
          texte="MAX 2/3 PERSONNES"
          texte2="2 BAGAGES"
        />
        <Card
          title="Limousines"
          classe="Classe S (ou similaire)"
          image={limousine}
          texte="MAX 2/3 PERSONNES"
          texte2="2 BAGAGES"
        />
      </div>
      <h4 className="h4V">OPTION SUPPLEMENTAIRE</h4>
      <div className="total">
        <p className="pTotal">Coût Total</p>
        <p className="pTotal">350 €</p>
      </div>
      <div className="blockButton">
        <button className="buttonQuitter" type="submit">
          Quitter
        </button>
        <button className="buttonContinuer" type="submit">
          Continuer
        </button>
      </div>
    </div>
  );
}
