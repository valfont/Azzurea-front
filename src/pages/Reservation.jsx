import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecapVoyage from "../components/RecapVoyage";
import FormVoyage from "../components/FormVoyage";

import "../style/footer.css";
import "../style/accueil.css";
import "../style/reservation.css";

export default function Reservation() {
  return (
    <div>
      <Navbar />
      <div className="containerRes">
        <RecapVoyage />
        <FormVoyage />
      </div>
      <Footer />
    </div>
  );
}
