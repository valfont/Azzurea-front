import React from "react";
import galerie from "../assets/svg/galerie.svg";
import logoTransparent from "../assets/svg/logoTransparent.svg";

const Footer = () => {
  return (
    <footer>
      <div className="background4">
        <img
          className="logoTransparent2"
          src={logoTransparent}
          alt="logoTransparent"
        />
        <p className="text">
          A partir de ou à destination de l’aéroport ou de la gare, depuis ou
          vers la région de St-Tropez, nos chauffeurs tous bilingues et
          expérimentés vous attendent, vous accueillent, vous aident à
          transporter vos bagages.
        </p>
        <img className="galerie" src={galerie} alt="galerie" />
        <br />
        <br />
        <br />
        <br />
        <nav>
          <ul className="nav-footer">
            <li>
              <a>Mentions Légales</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Réservation</a>
            </li>
            <li>
              <a>Politique de confidentialité</a>
            </li>
          </ul>
        </nav>
        <div className="footer">
          Copyright © 2021. AZUREA LIMOUSINE . All rights reserved. | BY
          PLANETAPP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
