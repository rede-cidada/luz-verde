import React from "react";
import { useState } from "react";
import "../Aquecedor/Aquecedor.css";

const Aquecedor = () => {
  const dates = [
    {
      id: "001",
      materiais:
        "120 garrafas pet transparentes de 2 litros, 100 caixas de leite de 1 litro, 22m de cano de PVC e 1/2 polegadas, 40 conexões T em PVC e 1/2 polegadas, 2 canos de PVC de 100mm com 70cm de comprimentos para molde dos potes das garrafas pet, 2 fitas de altofusão ou borracha de câmara de ar, 1 estilete, 2 litros de tinta fosca preta, 1 luva, 1 martelo de borracha, 2 caixas d' água n°100, 2 colas para tubos de PVC, 2 arcos de serra, 10 pregos, 2 tábuas de madeira com no mínimo 120mm de comprimento, 2 ripas pequenas com aproximadamente 15cm de comprimento, 2 fitas crepe com largura de 19mm, 4 tampões de PVC de 20mm e 1/2 polegadas, 8 conexões L (luvas) de PVC de 20mm e 1/2 polegadas",
    },
    {
      id: "002",
      materiais:
        "120 garrafas pet transparentes de 2 litros, 100 caixas de leite de 1 litro, 22m de cano de PVC e 1/2 polegadas, 40 conexões T em PVC e 1/2 polegadas, 2 canos de PVC de 100mm com 70cm de comprimentos para molde dos potes das garrafas pet, 2 fitas de altofusão ou borracha de câmara de ar, 1 estilete, 2 litros de tinta fosca preta, 1 luva, 1 martelo de borracha, 2 caixas d' água n°100, 2 colas para tubos de PVC, 2 arcos de serra, 10 pregos, 2 tábuas de madeira com no mínimo 120mm de comprimento, 2 ripas pequenas com aproximadamente 15cm de comprimento, 2 fitas crepe com largura de 19mm, 4 tampões de PVC de 20mm e 1/2 polegadas, 8 conexões L (luvas) de PVC de 20mm e 1/2 polegadas",
    },
  ];

  const [date, setDate] = useState("foi");

  return (
    <section className="boxAquecedor">
      <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
      <h4 className="subTitle">Para quantas casas deseja fazer?</h4>
      {dates.map((dates, index) => (
        <button key={index} onClick={() => setDate(dates.id)}>
          {dates.id}
        </button>
      ))}
    </section>
  );
};

export default Aquecedor;
