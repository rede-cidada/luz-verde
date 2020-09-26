import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import LuzVerde from './components/LuzVerde/LuzVerde';
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
      <Switch>
        <Route  path='/'>
          <LuzVerde />
        </Route>

        <Route  path='/enegia'>
          <Energia />
        </Route>

        <Route  path='/aquecedor'>
          <Aquecedor />
        </Route>

        <Route path='/team'>
          <Team />
        </Route>

      </Switch>
      <Footer />
    </div>
    </BrowserRouter> 
  );
}

export default App;
