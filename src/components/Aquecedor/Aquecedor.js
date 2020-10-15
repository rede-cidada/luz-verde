import React, { useEffect, useState } from "react";

import "../Aquecedor/Aquecedor.css";

const Aquecedor = () => {
  const [date, setDate] = useState([]);
  const [index, setIndex] = useState();

  useEffect(() => {
    const getData = async () => {
      const materiais = await fetch(
        "https://raw.githubusercontent.com/rede-cidada/fake-data-api/main/luz-verde/data.json"
      );
      const data = await materiais.json();

      setDate(data);

    };
    getData();
  }, []);
  return (
    <section className="boxAquecedor">
      <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
      <h4 className="subTitle">Para quantas casas deseja fazer?</h4>

      <div className="dadosAquecedor">
        {date.map(({ id, titulo }, index) => (
          <button className="botaoAquecedor" key={id} onClick={() => setIndex(index)}>
            {titulo}
          </button>
        ))}

        <p className="textAquecedor">{date && <p>{date[index]?.materiais}</p>}</p>
      </div>
      <div>
        <h3 className="subTitle">Instruções de como cortar a caixa de leite de e como construir o aquecedor</h3>
      <iframe className="video" width="400" height="300" src="https://www.youtube.com/embed/8TeYdtupvJM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className="video" width="400" height="300" src="https://www.youtube.com/embed/-UOAoNXo_lE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  );
};

export default Aquecedor;
