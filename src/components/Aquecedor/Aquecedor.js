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
      console.log(data);
    };
    getData();
  }, []);
  return (
    <section className="boxAquecedor">
      <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
      <h4 className="subTitle">Para quantas casas deseja fazer?</h4>
      {date.map(({ id }, index) => (
        <button key={id} onClick={() => setIndex(index)}>
          {id}
        </button>
      ))}

      {date && <p>{date[index]?.materiais}</p>}
    </section>
  );
};

export default Aquecedor;
