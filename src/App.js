import React from "react";
import "./App.css";
import Aquecedor from "./components/Aquecedor/Aquecedor";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Team from './components/Team/Team';


function App() {
  return (
    <div className="App">
      <Header />
      <Aquecedor />
      <Team />
      <Footer/>
    </div>
  );
}

export default App;
