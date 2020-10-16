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
    <div className="box_team">
      <h2 className="titulo_team">Quem Faz</h2>
      <div className="caixa_teams">
        <div className="caixa_team">
          <img className="img_team" src={israel} alt="integrante israel " />
          <p className="nome_team">Israel Batista</p>
          <p className="texto_team">
            Estudante do curso de Front-End pela Rede Cidadã, fotógrafo e web
            designer, e criador (com a esposa) da loja online: Laranja Mimo -
            Presentes. Atua com manutenção e atualização de sites em wordpress.
            E auxiliando e fotografando em ensaios e eventos. Natural de Macaé, Rio de Janeiro, flamenguista nato.
            Como hobby, ama viajar e gosta de jogar online com amigos.
          </p>
          <div className="caixa_icon">
            <a
              href="https://github.com/Israelfer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-batista/"
              target="_blank"
              rel="noopener noreferrer"
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
            Uma estudante de front-end que não vive sem música, amante de
            fotografia, mente aberta para o novo e que sonha em conhecer outros
            países e novas culturas, minha família e amigos são meu lar, e tenho
            dois pets que só me dão dor de cabeça, mas que eu não vivo sem!
          </p>
          <div className="caixa_icon">
            <a
              href="https://github.com/mariahgll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/mariah-guedes-96087b1ab/"
              target="_blank"
              rel="noopener noreferrer"
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
            arte e compartilha bons momentos ao lado da família, do noivo e dos
            seus 3 amores: Logan, Scott e Hank.
          </p>
          <div className="caixa_icon">
            <a
              href="https://github.com/mariliandrad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/mariliandrad/"
              target="_blank"
              rel="noopener noreferrer"
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
          <img className="img_team" src={shellcya} alt="integrante shellcya" />
          <p className="nome_team">Shellcya Habiakel</p>
          <p className="texto_team">
            Estudante de Front-end, aventureira que sonha em conhecer o mundo,
            novas culturas e aprender novos idiomas, não vive sem música e ama
            colecionar bons momentos com amigos e família.
          </p>
          <div className="caixa_icon">
            <a
              href="https://github.com/Shellcya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="http://linkedin.com/in/shellcya-habiakel-1344301ab"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="https://github.com/nessalive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_team" src={github} alt="icon do gitHub " />
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-oliveira-0036a4154/"
              target="_blank"
              rel="noopener noreferrer"
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
    </div>
  );
}

export default Team;
