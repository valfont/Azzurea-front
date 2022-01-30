import React from "react";
import "../style/card.css";
import personne from "../assets/svg/personne.svg";
import bagage from "../assets/svg/bagage.svg";

export default function Card({ title, classe, image, texte, texte2 }) {
  return (
    <div className="blockRond">
      <div className="rond1"></div>
      <div className="card">
        <h4 className="h4Card">{title}</h4>
        <p> {classe}</p>
        <img src={image} />
        <div className="blockP">
          <img src={personne} />
          <p className="pCard"> {texte}</p>
        </div>
        <div className="blockP">
          <img src={bagage} />
          <p className="pCard"> {texte2}</p>
        </div>
        <button className="buttonCardAjouter" type="submit">
          Ajouter
        </button>
      </div>
    </div>
  );
}
