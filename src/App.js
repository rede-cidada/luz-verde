import React from "react";
import "./App.css";
import Aquecedor from "./components/Aquecedor/Aquecedor";
import { Header } from "./components/Header/Header";
import Team from './components/Team/Team';


function App() {
  return (
    <div className="App">
      <Header />
      <Aquecedor />
      <Team />
    </div>
  );
}

export default App;
