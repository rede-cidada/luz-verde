/* eslint-disable jsx-a11y/iframe-has-title */
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
    <div className="boxAquecedor">
      <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
      <h4 className="subTitle">Para quantas casas deseja fazer?</h4>

      <section className="dadosAquecedor">
        {date.map(({ id, titulo }, index) => (
          <button className="botaoAquecedor" key={id} onClick={() => setIndex(index)}>
            {titulo}
          </button>
        ))}

        {date && <div className="textAquecedor">
					<h3>{date[index]?.titulo}</h3>
					{index >=0? <p>Materiais:</p>:'Selecione o número de casas que deseja ao lado.' }
					<p>{date[index]?.materiais}</p>
					</div>}
      </section>

      <h3 className="subTitle">Instruções de como construir o seu aquecedor:</h3>

      <section className="sectionVideos">
      <div className="videoContainer">
			<iframe className="video" src="https://www.youtube.com/embed/8TeYdtupvJM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			<div className="videoContainer">
			<iframe className="video" src="https://www.youtube.com/embed/-UOAoNXo_lE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div> 
      </section>
    </div>
  );
};

export default Aquecedor;
