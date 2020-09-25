import React from "react";
import { Link } from "./Link/Link";
import Logo from "../../assets/img/logo-luz-verde-branca.svg";
import "./Header.css";

export const Header = () => (
  <nav className="corpo">
    <div>
      <img className="logo" src={Logo} alt="Logo Luz Verde" />
    </div>

    <div className="secoes">
      <Link name="Luz verde" />
      <Link name="Energia limpa" />
      <Link name="Faça seu aquecedor" />
      <Link name="Quem faz" />
    </div>
  </nav>
);
