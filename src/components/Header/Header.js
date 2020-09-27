import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-luz-verde-branca.svg";
import "./Header.css";

export const Header = () => (
  <nav className="corpo">
    <div>
      <img className="logo" src={Logo} alt="Logo Luz Verde" />
    </div>

    <div>
      <input id="secoes-hamburguer" type="checkbox" />
      <label for="secoes-hamburguer">
        <div className="botao-hamburguer">
          <span className="hamburguer"></span>
        </div>
      </label>

      <div className="secoes">
        <Link to="/">Luz Verde</Link>
        <Link to="/energia">Energia Limpa</Link>
        <Link to="/aquecedor">Faça Seu Aquecedor</Link>
        <Link to="/team">Quem Faz</Link>
      </div>
    </div>
  </nav>
);
