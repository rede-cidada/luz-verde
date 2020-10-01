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
      {/* <h4 className="subTitle-Energia">Objetivo de Desenvolvimento Sustentável - nº 7 das Nações Unidas</h4> */}

      <div className="Content-Energia">
        <div className="Text-Energia">
          <p>
          A energia limpa refere-se a fontes que são renováveis e que não lançam poluentes 
          na atmosfera, interferindo no ciclo do carbono, ao contrário dos combustíveis fósseis.
          </p>
          
          <p>
            Quando se fala em “energia limpa”, não estamos falando de um tipo de geração de
            energia que não cause nenhum impacto ambiental, pois, até o momento, esse sonho 
            ainda não se tornou realidade.
          </p>
          
          <p>
            Na verdade, a energia limpa refere-se àquela fonte de energia que não lança 
            poluentes na atmosfera e que apresenta um impacto sobre a natureza somente no 
            local da instalação da usina.
          </p>

          <h4>
            Formas de energia limpa
          </h4>
          
          <p>
            Entre as formas de energia que atendem a esses requisitos, podemos citar: 
            energia eólica, energia solar,energia maremotriz, energia geotérmica, energia hidráulica e 
            energia nuclear. Todas essas formas de energia causam impactos ambientais, mesmo que sejam 
            mínimos, porém, não interferem na poluição em nível global.
          </p>

          <p>
            E economizar na conta de energia é meta para a maioria das pessoas, visto que esse recurso 
            elétrico só aumenta o valor a cada mês, nada mais eficiente do que aproveitar os recursos 
            naturais do sol para gerar energia limpa. O sistema do aquecedor solar caseiro utiliza 
            garrafas pet e caixas de leite usadas foi desenvolvido para reduzir o consumo de energia 
            elétrica e resguardar o meio ambiente.
          </p>

          <p>
            Aqui nós iremos iremos lhe ajudar a calcular os materiais necessários para fazero aquecedor.
          </p>

          <p>
            Texto retirado dos sites: <a href="https://brasilescola.uol.com.br/quimica/energia-limpa.htm"
            className="link-Energia" target="_blank" rel="noopener noreferrer">brasilescola.uol.com.br</a> e             <a href="https://www.portal-energia.com/como-construir-um-aquecedor-solar-caseiro-com-garrafas-pet/"
            className="link-Energia" target="_blank" rel="noopener noreferrer">portal-energia.com</a>
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
