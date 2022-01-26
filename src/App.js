import React from "react";
import "./App.css";
import Accueil from "./pages/Accueil";
import Reservation from "./pages/Reservation";
import Reservation2 from "./pages/Reservation2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Reservation" component={Reservation} />
        <Route exact path="/Reservation2" component={Reservation2} />
      </Switch>
    </Router>
  );
}

export default App;
