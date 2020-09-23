import React from "react";
import { Link } from "./Link/Link";
import Logo from "../../assets/img/logo.svg";
import "./Header.css";

export const Header = () => (
  <nav className="corpo">
    <div>
      <img className="logo" src={Logo} alt="Logo Luz Verde" />
    </div>

    <div className="secoes">
      <Link name="Luz verde" />
      <Link name="Energia limpa" />
      <Link name="Obtenha também" />
      <Link name="Quem faz" />
    </div>
  </nav>
);
