import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import Energia from "./components/Energia/Energia";
import Aquecedor from "./components/Aquecedor/Aquecedor";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Energia />
      <Aquecedor />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
