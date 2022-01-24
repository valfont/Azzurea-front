import React from "react";

// IMPORT ASSETS
import logoTransparent from "../assets/svg/logoTransparent.svg";
import Navbar from "../components/Navbar";
import photoAvatar from "../assets/svg/photoAvatar.svg";

// IMPORT STYLES
import "../style/accueil.css";
import "../style/azureaServices.css";
import "../style/footer.css";
import "../style/stTrop.css";

// IMPORT COMPONENTS
import Footer from "../components/Footer";
import Form from "../components/Form";
import Grid from "../components/Grid";
import Grid2 from "../components/Grid2";
import Grid3 from "../components/Grid3";

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* ACCUEIL */}
        <div className="section-left">
          <p className="slogan1">voyager en toute sérénité</p>
          <p className="slogan2">avec azurea limousines</p>
          <img
            className="logoTransparent"
            src={logoTransparent}
            alt="logoTransparent"
          />
        </div>
        <section className="section-right">
          <Form />
        </section>
      </div>
      <div className="background"></div>

      {/* AZUREA LIMOUSINES */}

      <section className="background2"></section>
      <section className="on">
        <img className="avatar" src={photoAvatar} alt="logo" />
        <article>
          <h2 className="title-article">azurea limousines </h2>
          <p>
            Azuréa Limousine vous accompagne dans tous vos déplacements
            d’affaires ou d’ordre privé en vous proposant un service
            personnalisé haut de gamme de location de voiture avec nos
            chauffeurs vtc sur la Côte d’Azur. Azuréa Limousine met à votre
            disposition un service de location de voitures luxueuses, de la
            berline au mini van, avec des chauffeurs privés bilingues. Notre
            prestation de location limousine avec chauffeur particulier offre à
            notre clientèle exigeante un service haut de gamme conjuguant
            liberté et rapidité de déplacement, élégance et efficacité.{" "}
          </p>
        </article>
        <h3 className="titleH3">Nos Flottes</h3>
        <Grid />
      </section>

      {/* AZUREA SERVICES */}

      <div className="background3">
        <h3 className="titleH3a">azurea service </h3>
        <Grid2 />
      </div>

      {/* ST TROPEZ */}
      <h3 className="titleH3b">Les incontournables à faire à Saint-Tropez </h3>
      <Grid3 />

      {/* FOOTER PAGE */}
      <Footer />
    </div>
  );
};

export default Accueil;
