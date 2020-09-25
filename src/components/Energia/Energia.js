import React from "react";
import "./Energia.css";
//import ImgEnergia from '../../assets/img/energia-limpa.png'

const Energia = () => {
  return (
    <section className="sec-Energia">
      <h2 className="Title-Energia">Energia Limpa</h2>

      <div className="Content-Energia">
        <div className="Text-Energia">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit imperdiet purus vitae feugiat. Quisque semper gravida
            nisi, vel facilisis turpis gravida nec. Donec sollicitudin orci at
            erat tempor tincidunt. Donec id aliquet sapien. Sed id tellus
            libero. Nullam laoreet consequat mauris, quis ornare mauris
            fringilla et. Duis non imperdiet nisl, non sollicitudin turpis.
            Pellentesque tincidunt quis ipsum sed dictum. Vivamus eu dolor diam.
            Nam quam mauris, iaculis quis diam ac, malesuada maximus enim. Proin
            et aliquet dui.
          </p>
          <p>
            Quisque nec tortor et metus mattis sodales. Sed volutpat libero ac
            leo varius commodo non quis eros. Donec eu scelerisque lorem, id
            hendrerit erat. Pellentesque tincidunt condimentum elit ac
            efficitur. Pellentesque leo est, luctus congue massa id, tristique
            blandit libero. Vivamus convallis erat vel tempus convallis. Fusce
            eros felis, tincidunt vel sollicitudin pharetra, efficitur eget
            eros. Nullam ut commodo mi. Etiam sit amet ipsum nisi. Integer eu
            fringilla dolor, ut maximus tellus. Etiam finibus dapibus magna sed
            eleifend. Curabitur id rutrum erat.
          </p>
          <p>
            Donec ornare velit tortor, et vulputate est mollis eu. Fusce blandit
            augue quis mattis tincidunt. Duis porttitor, augue et imperdiet
            blandit, magna augue vehicula nulla, nec condimentum ex metus ac
            ante. Suspendisse potenti. Sed sed sodales magna, sed cursus ligula.
            Duis sollicitudin finibus erat, non maximus tellus ultrices
            dignissim. Nullam efficitur blandit leo et efficitur. Aliquam
            pellentesque leo enim, quis bibendum libero accumsan et. Curabitur
            sed scelerisque neque.
          </p>
        </div>

        <div>
          {/* <img src={ImgEnergia} alt="Ícones sobre energia limpa"/> */}
        </div>
      </div>
    </section>
  );
};

export default Energia;
