import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-luz-verde-branca.svg";
import "./Header.css";

export const Header = () => (
  <nav className="corpo">
    <div>
      <img className="logo" src={Logo} alt="Logo Luz Verde" />
    </div>

    <div className="secoes">
      <Link to='/' name="Luz verde" />
      <Link to='/energia' name="Energia limpa" />
      <Link to='/aquecedor' name="Faça seu aquecedor" />
      <Link to='/team' name="Quem faz" />
    </div>
  </nav>
);
