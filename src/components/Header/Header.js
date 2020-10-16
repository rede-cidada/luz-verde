import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink exact to="/" onClick={menuClique} activeClassName="active">
            Luz Verde
          </NavLink>
          <NavLink exact to="/energia" onClick={menuClique} activeClassName="active">
            Energia Limpa
          </NavLink>
          <NavLink exact to="/aquecedor" onClick={menuClique} activeClassName="active">
            Faça Seu Aquecedor
          </NavLink>
          <NavLink exact to="/team" onClick={menuClique} activeClassName="active">
            Quem Faz
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
