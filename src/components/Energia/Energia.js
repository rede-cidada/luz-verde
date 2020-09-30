import React from "react";
import "./Energia.css";
import aguaImg from '../../assets/img-energ-limpas/agua.svg';
import cataventoImg from '../../assets/img-energ-limpas/catavento.svg';
import fogoImg from '../../assets/img-energ-limpas/fogo.svg';
import folhaImg from '../../assets/img-energ-limpas/folha.svg';
import industriaImg from '../../assets/img-energ-limpas/industria.svg';
import lampadaImg from '../../assets/img-energ-limpas/lampada.svg';
import painelSolarImg from '../../assets/img-energ-limpas/painel-solar.svg';
import radiacaoImg from '../../assets/img-energ-limpas/radiacao.svg';
import raioImg from '../../assets/img-energ-limpas/raio.svg';

const Energia = () => {
  return (
    <section className="sec-Energia">
      <h2 className="Title-Energia">Energia Limpa e Acessível</h2>
      <h4 className="subTitle-Energia">Objetivo de Desenvolvimento Sustentável - nº 7 das Nações Unidas</h4>

      <div className="Content-Energia">
        <div className="Text-Energia">
          <p>
            Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos
          </p>
          
          <p>
            Objetivo 7. Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todas e todos
          </p>
          
          <p>
            7.1 Até 2030, assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia
          </p>
          
          <p>
            7.2 Até 2030, aumentar substancialmente a participação de energias renováveis na matriz energética global
          </p>
          
          <p>
            7.3 Até 2030, dobrar a taxa global de melhoria da eficiência energética
          </p>

          <p>
            7.a Até 2030, reforçar a cooperação internacional para facilitar o acesso a pesquisa e tecnologias de energia limpa, incluindo energias renováveis, eficiência energética e tecnologias de combustíveis fósseis avançadas e mais limpas, e promover o investimento em infraestrutura de energia e em tecnologias de energia limpa
          </p>
          
          <p>
            7.b Até 2030, expandir a infraestrutura e modernizar a tecnologia para o fornecimento de serviços de energia modernos e sustentáveis para todos nos países em desenvolvimento, particularmente nos países menos desenvolvidos, nos pequenos Estados insulares em desenvolvimento e nos países em desenvolvimento sem litoral, de acordo com seus respectivos programas de apoio
          </p>
        </div>

        <div className="Box-Icon-Energia">
          <img className="Single-Icon-Energia" src={aguaImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={cataventoImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={fogoImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={folhaImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={industriaImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={lampadaImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={painelSolarImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={radiacaoImg} alt="Ícones sobre energia limpa"/>
          <img className="Single-Icon-Energia" src={raioImg} alt="Ícones sobre energia limpa"/>
        </div>
      </div>
    </section>
  );
};

export default Energia;
