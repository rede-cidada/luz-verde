import React from "react";
import israel from "../../assets/img-time/ISR.png";
import marilia from "../../assets/img-time/MARÍ.png";
import mariah from "../../assets/img-time/MAR.png";
import shellcya from "../../assets/img-time/SHE.png";
import vanessa from "../../assets/img-time/VAN.png";

import github from "../../assets/img-time/gitPNG.png";
import linkedin from "../../assets/img-time/linkedinPNG.png";

import "../Team/Team.css";

function Team() {
  return (
    <>
      <h2 className="titulo_team">Quem Somos?</h2>
      <div className="caixa_teams">
        <div className="caixa_team">
          <img className="img_team" src={israel} alt="integrante israel " />
          <p className="nome_team">Israel Batista</p>
          <p className="texto_team">
            Falar sobre mim é complicado mas fazendo um resumo eu gosto de
            gatos, cachorros, fotos, cafeterias e cheiro de café, queria um dia
            ser barista e algumas outras profissões listadas no meu gitHub,
            escrevo uns textos e tenho uma lojinha chamada suncake.nessa
            gostaria muito de cativar o proximo com minha arte, obrigada por ver
            o site e lembre-se bebam água.;
          </p>
          <div className="caixa_icon">
            <a href="https://github.com/Israelfer" target="_blank">
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-batista/"
              target="_blank"
            >
              <img
                className="icon_team"
                src={linkedin}
                alt="icon do linkedin "
              />
            </a>
          </div>
        </div>

        <div className="caixa_team">
          <img className="img_team" src={mariah} alt="integrante mariah" />
          <p className="nome_team">Mariah Guedes</p>
          <p className="texto_team">
            Falar sobre mim é complicado mas fazendo um resumo eu gosto de
            gatos, cachorros, fotos, cafeterias e cheiro de café, queria um dia
            ser barista e algumas outras profissões listadas no meu gitHub,
            escrevo uns textos e tenho uma lojinha chamada suncake.nessa
            gostaria muito de cativar o proximo com minha arte, obrigada por ver
            o site e lembre-se bebam água.
          </p>
          <div className="caixa_icon">
            <a href="https://github.com/mariahgll" target="_blank">
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/mariah-guedes-96087b1ab/"
              target="_blank"
            >
              <img
                className="icon_team"
                src={linkedin}
                alt="icon do linkedin "
              />
            </a>
          </div>
        </div>

        <div className="caixa_team">
          <img className="img_team" src={marilia} alt="integrante marilia" />
          <p className="nome_team">Marília Andrade</p>
          <p className="texto_team">
            Estudante do curso de Front-End, pela Rede Cidadã, arquiteta e
            designer. Atua desenvolvendo identidades visuais, conteúdos gráficos
            e nas horas vagas projeta sonhos. Ama a natureza, MPB, aprecia a
            arte e compartilha bons momentos ao lado da minha família, meu noivo
            e dos seus 3 amores: Logan, Scott e Hank.
          </p>
          <div className="caixa_icon">
            <a href="https://github.com/mariliandrad" target="_blank">
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a href="https://www.linkedin.com/in/mariliandrad/" target="_blank">
              <img
                className="icon_team"
                src={linkedin}
                alt="icon do linkedin "
              />
            </a>
          </div>
        </div>

        <div className="caixa_team">
          <img className="img_team" src={shellcya} alt="integrante shellcya" />
          <p className="nome_team">Shellcya Habiakel</p>
          <p className="texto_team">
            Falar sobre mim é complicado mas fazendo um resumo eu gosto de
            gatos, cachorros, fotos, cafeterias e cheiro de café, queria um dia
            ser barista e algumas outras profissões listadas no meu gitHub,
            escrevo uns textos e tenho uma lojinha chamada suncake.nessa
            gostaria muito de cativar o proximo com minha arte, obrigada por ver
            o site e lembre-se bebam água.
          </p>
          <div className="caixa_icon">
            <a href="https://github.com/Shellcya" target="_blank">
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="http://linkedin.com/in/shellcya-habiakel-1344301ab"
              target="_blank"
            >
              <img
                className="icon_team"
                src={linkedin}
                alt="icon do linkedin "
              />
            </a>
          </div>
        </div>

        <div className="caixa_team">
          <img className="img_team" src={vanessa} alt="integrante vanessa" />
          <p className="nome_team">Vanessa Oliveira</p>
          <p className="texto_team">
            Falar sobre mim é complicado mas fazendo um resumo eu gosto de
            gatos, cachorros, fotos, cafeterias e cheiro de café, queria um dia
            ser barista e algumas outras profissões listadas no meu gitHub,
            escrevo uns textos e tenho uma lojinha chamada suncake.nessa
            gostaria muito de cativar o proximo com minha arte, obrigada por ver
            o site e lembre-se bebam água.
          </p>
          <div className="caixa_icon">
            <a href="https://github.com/nessalive" target="_blank">
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-oliveira-0036a4154/"
              target="_blank"
            >
              <img
                className="icon_team"
                src={linkedin}
                alt="icon do linkedin "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
