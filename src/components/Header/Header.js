import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-luz-verde-branca.svg";
import "./Header.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuClique = () => {
    setOpen(false);
  };
  const botaoClique = () => {
    setOpen(!open);
  };
  return (
    <nav className="nav">
      <div>
        <a href="/">
          <img className="logo" src={Logo} alt="Logo Luz Verde" />
        </a>
      </div>

      <div>
        <input
          id="secoes-hamburguer"
          type="checkbox"
          checked={open}
          onChange={setOpen}
        />
        <label htmlFor="">
          <div className="botao-hamburguer" onClick={botaoClique}>
            <span className="hamburguer"></span>
          </div>
        </label>

        <div className="secoes">
          <Link to="/" onClick={menuClique}>
            Luz Verde
          </Link>
          <Link to="/energia" onClick={menuClique}>
            Energia Limpa
          </Link>
          <Link to="/aquecedor" onClick={menuClique}>
            Faça Seu Aquecedor
          </Link>
          <Link to="/team" onClick={menuClique}>
            Quem Faz
          </Link>
        </div>
      </div>
    </nav>
  );
};
