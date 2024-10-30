import React from "react";
import s from "./AboutServices.module.css";
import about from '../../../Assets/aboutus1.jpeg'
import ButtonWhiteHover from "../../../Components/Buttons/ButtonWhiteHover/ButtonWhiteHover";
import CheckUL from "../../../Components/UL/CheckUL/CheckUL";
import { IoMdCheckmark } from "react-icons/io";

function AboutServices() {
    const array= ["Publicamos diariamente en las redes tu web para maximizar la visibilidad","Diseñamos con un enfoque moderno y estratégico, optimizado para convertir visitas en clientes","Capturamos y transmitimos la esencia de tu negocio para conectar con tu audiencia ideal, basandonos en los principios claves del marketing digital",
    // "Implementamos frases persuasivas, basandonos en los principios claves del marketing digital"
]
  return (
    <section className={`${s.section} section`}>
      <article className={`${s.container} `}>
        <div className={s.img_container}>
            <img src={about} alt="Personas trabajando en computadora" className={s.img}/>
        </div>
        <div className={s.text_container}>
          <h2 className={`${s.section_title}`}>
            ¿POR QUE ELEGIR EVOLUCIÓN DIGITAL?
          </h2>
          <p className={s.section_subtitle}>Más que desarrollo de software.</p>
          {/* <p className={s.text}>En Evolución Digital, creemos en construir soluciones a medida que se adapten perfectamente a las <span className={s.text_highlight}>necesidades únicas de tu negocio</span>. Te ofrecemos un acompañamiento personalizado desde la concepción de la idea hasta la implementación, asegurándonos de que tu software sea una herramienta poderosa para <span className={s.text_highlight}>impulsar tu crecimiento</span>.</p> */}
          <CheckUL array={array} color={'rgb(117,218,132)'} icon={IoMdCheckmark} />
          <p><span className={s.text_highlight}>¿Listo para dar el siguiente paso?</span> ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos!</p>
         <ButtonWhiteHover/>
        </div>
      </article>
    </section>
  );
}

export default AboutServices;
