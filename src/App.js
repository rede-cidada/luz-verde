import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LuzVerde from "./components/LuzVerde/LuzVerde";
import { Header } from "./components/Header/Header";
import Energia from "./components/Energia/Energia";
import Aquecedor from "./components/Aquecedor/Aquecedor";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <LuzVerde />
            </Route>
            <Route exact path="/energia">
              <Energia />
            </Route>

            <Route exact path="/aquecedor">
              <Aquecedor />
            </Route>

            <Route exact path="/team">
              <Team />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
