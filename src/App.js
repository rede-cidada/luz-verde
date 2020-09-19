import React from "react";
import "./App.css";
import Aquecedor from "./components/Aquecedor/Aquecedor";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Aquecedor />
    </div>
  );
}

export default App;
