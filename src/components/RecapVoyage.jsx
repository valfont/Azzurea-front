import React from "react";
import calendrier from "../assets/svg/calendrier.svg";
import heure from "../assets/svg/heure.svg";
import depart from "../assets/svg/depart.svg";

export default function RecapVoyage() {
  return (
    <div className="blockLeft">
      <p className="P1">RECAPITULATIF DU VOYAGE</p>

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--Titre1--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <div className="titreCercle">
        <p className="pCercle">1</p>
        <p className="titre">Voyage</p>
      </div>
      <div className="info">
        <img src={calendrier} alt="icon" />
        <p className="pRecap">Date: 16/02/2022 </p>
      </div>
      <div className="info">
        <img src={heure} alt="icon" />
        <p className="pRecap">Heure: 15:30 </p>
      </div>
      <div className="info">
        <img src={depart} alt="icon" />
        <p className="pRecap">Depart: 5 rue de la république 13001 Marseille</p>
      </div>
      <div className="info">
        <img src={depart} alt="icon" />
        <p className="pRecap">Arrivé: 5 rue de la république 13001 Marseille</p>
      </div>

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--Titre 2--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <div className="titreCercle">
        <p className="pCercle">2</p>
        <p className="titre">Vehicules</p>
      </div>
      <p className="pRecap">Gammes Prestige X1 </p>
      <p className="pRecap">Gamme Eco X1</p>

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--Titre 2--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <div className="titreCercle">
        <p className="pCercle">3</p>
        <p className="titre">Informations</p>
      </div>
    </div>
  );
}
