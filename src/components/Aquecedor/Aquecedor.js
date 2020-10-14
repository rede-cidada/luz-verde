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
    </section>
  );
};

export default Aquecedor;
