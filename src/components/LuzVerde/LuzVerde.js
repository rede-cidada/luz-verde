import React from "react";
import "./LuzVerde.css";

export default function LuzVerde() {
  return (
    <section className="imagem-home">
      <div className="sobre-luz-verde">
        <h1 className="Title-LuzVerde">Luz Verde</h1>

        <p className="subtituloLuz">
          É uma ideia sustentável que visa a geração de energia limpa, econômica
          e renovável, a preço justo, através da utilização de materiais recicláveis.
        </p>

        <button className="btn-home"><a href="/aquecedor" className="home-link">Faça o seu aquecedor</a></button>
      </div>
    </section>
  );
}
