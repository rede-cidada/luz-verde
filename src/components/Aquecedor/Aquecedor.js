import React, { useEffect, useState } from "react";
import "../Aquecedor/Aquecedor.css";

const Aquecedor = () => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const materiais = await fetch(
        "https://raw.githubusercontent.com/rede-cidada/fake-data-api/main/luz-verde/data.js"
      );

      setDate(materiais);
    };
    getData();
  }, []);
  return (
    <section className="boxAquecedor">
      <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
      <h4 className="subTitle">Para quantas casas deseja fazer?</h4>
      {/* {date.map((dates, index) => (
        <button key={index}>{dates.id}</button>
      ))} */}
      <button onClick={() => alert(date[0])}>Aperta</button>
    </section>
  );
};

export default Aquecedor;
