import React from "react";
import "../style/card.css";
import etape from "../assets/svg/etape.svg";
import berline from "../assets/svg/berline.svg";
import limousine from "../assets/svg/limousine.svg";
import van from "../assets/svg/van.svg";
import Card from "../components/Card";
import bagageImg from "../assets/svg/bagageImg.svg";
import personne from "../assets/svg/personne.svg";
import bagage from "../assets/svg/bagage.svg";
import siègeEnfant from "../assets/svg/siègeEnfant.svg";
import siègeBebe from "../assets/svg/siègeBebe.svg";

export default function VehiculesCards() {
  return (
    <div className="blockRight">
      <div className="etape">
        <img src={etape} />
      </div>

      {/* --------------------------------------- Card container Voiture ----------------------------- */}

      <h4 className="h4V">2. JE CHOISIS MES VEHICULES</h4>
      <div className="cardContainer">
        <Card
          title="Berlines"
          classe="Classe E (ou similaire)"
          image={berline}
          texte="MAX 3 PERSONNES"
          texte2="2 BAGAGES"
          icon1={personne}
          icon2={bagage}
        />
        <Card
          title="Limousines"
          classe="Classe S (ou similaire)"
          image={limousine}
          classImage="imageCardL"
          texte="MAX 2/3 PERSONNES"
          texte2="2 BAGAGES"
          icon1={personne}
          icon2={bagage}
        />
        <Card
          title="Van"
          classe="Classe V (ou similaire)"
          image={van}
          classImage="imageCardV"
          texte="MAX 7 PERSONNES"
          texte2="6 BAGAGES"
          icon1={personne}
          icon2={bagage}
        />
      </div>

      {/* --------------------------------------- Card container Option ----------------------------- */}

      <h4 className="h4V">OPTION SUPPLEMENTAIRE</h4>
      <div className="cardContainer">
        <Card
          title="Van Bagages"
          image={bagageImg}
          texte2="Jusqu'a 15 Bagages"
          icon2={bagage}
        />
        <Card title="Siège Enfant" image={siègeEnfant} classImage="imgSiège" />
        <Card title="Siège Bébé" image={siègeBebe} classImage="imageSiègeBB" />
      </div>
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
