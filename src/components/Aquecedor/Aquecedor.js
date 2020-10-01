import React from "react";
import '../Aquecedor/Aquecedor.css'

const Aquecedor = () => {
   return (

      <section className="boxAquecedor">

         <h2 className="titleAquecedor">Faça Seu Aquecedor </h2>
         <h4 className="subTitle">Para quantas casas deseja fazer?</h4>

         <ul >
            <li className="listAquecedor">
               <input className="optionAquecedor" type="radio" id="option" name="opçao" value="zero" />
               <label htmlForr="option0">No máximo Duas</label>
            </li>
            <li className="listAquecedor">
               <input className="optionAquecedor" type="radio" id="option0" name="opçao" value="one" />
               <label htmlFor="option">No máximo Quatro</label>
            </li>

            <li className="listAquecedor">
               <input className="optionAquecedor" type="radio" id="option2" name="opçao" value="two" />
               <label htmlFor="option2">No máximo Seis</label>
            </li>

            <li className="listAquecedor">
               <input className="optionAquecedor" type="radio" id="option3" name="opçao" value="three" />
               <label htmlFor="option3">No máximo Oito</label>
            </li>
         </ul>




      </section>



   )
}




export default Aquecedor;