import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Aquecedor/Aquecedor.css";

const Aquecedor = () => {
  const [date, setDate] = useState([]);

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
      {date.map(({ id, materiais }) => (
        <button key={id}>{id}</button>
      ))}
      {/* <button onClick={() => alert(date[0])}>Aperta</button> */}
    </section>
  );
};

export default Aquecedor;
