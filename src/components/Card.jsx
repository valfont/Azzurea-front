import React from "react";
import "../style/card.css";

export default function Card({
  title,
  classe,
  image,
  texte,
  texte2,
  classImage,
  icon1,
  icon2,
}) {
  return (
    <fieldset className="card">
      <legend className="rond1"></legend>
      <h4 className="h4Card">{title}</h4>
      <p> {classe}</p>
      <img src={image} className={classImage} />
      <div className="blockP">
        <img src={icon1} />
        <p className="pCard"> {texte}</p>
      </div>
      <div className="blockP">
        <img src={icon2} />
        <p className="pCard"> {texte2}</p>
      </div>
      <button className="buttonCardAjouter" type="submit">
        Ajouter
      </button>
    </fieldset>
  );
}
