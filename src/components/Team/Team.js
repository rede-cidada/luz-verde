import React from "react";
import israel from '../../assets/img-time/ISR.png';
import marilia from '../../assets/img-time/MAR.png';
import mariah from '../../assets/img-time/MARÍ.png';
import shellcya from '../../assets/img-time/SHE.png';
import vanessa from '../../assets/img-time/VAN.png';

import "../Team/Team.css";

function Team() {
  return (
    <div>
      <h2 className="titulo_team">Quem Somos?</h2>
      <div className="caixa_team">
        <img className="img_team" src={israel} alt="integrante israel " />
        <img className="img_team" src={marilia} alt="integrante marilia" />
        <img className="img_team" src={mariah} alt="integrante mariah" />
        <img className="img_team" src={shellcya} alt="integrante shellcya" />
        <img className="img_team" src={vanessa} alt="integrante vanessa" />
      </div>
      <div className="nomes_team">
        <p className="nome_team">Israel Batista</p>
        <p className="nome_team">Mariah Guedes</p>
        <p className="nome_team">Marília Andrade</p>
        <p className="nome_team">Shellcya Habiakel</p>
        <p className="nome_team">Vanessa Oliveira</p>
      </div>

      <div className="textos_team">
        <p className="texto_team">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="texto_team">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="texto_team">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="texto_team">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="texto_team">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
    </div>
  );
}

export default Team;
