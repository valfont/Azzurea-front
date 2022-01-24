import React from "react";
import "./App.css";
import Accueil from "./pages/Accueil";
import Reservation from "./pages/Reservation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Reservation" component={Reservation} />
      </Switch>
    </Router>
  );
}

export default App;
