import React from 'react'
import israel from '../../assets/ISR.png';
import marilia from '../../assets/MAR.png';
import mariah from '../../assets/MARÍ.png';
import shellcya from '../../assets/SHE.png';
import vanessa from '../../assets/VAN.png';

function Team() {
    return (
        <div>
            <h2>Desenvovedores</h2>
            <img src={israel} alt="integrante israel "/>
            <p><a href="#">Israel Batista</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

            <img src={marilia} alt="integrante marilia"/>
            <p><a href="#">Marília Andrade</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

            <img src={mariah} alt="integrante mariah"/>
            <p><a href="#">Mariah Guedes</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

            <img src={shellcya} alt="integrante shellcya"/>
            <p><a href="#">Shellcya Habiakel</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

            <img src={vanessa} alt="integrante vanessa"/>
            <p><a href="#">Vanessa Oliveira</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
    )
}

export default Team;
