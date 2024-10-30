import React from "react";
import s from "./AboutUs.module.css";
import about from '../../Assets/aboutus1.jpeg'
import ButtonWhiteHover from "../../Components/Buttons/ButtonWhiteHover/ButtonWhiteHover";
function AboutUs() {
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
          <p className={s.section_subtitle}>Aliados Estratégicos en Desarrollo de Software para tu Crecimiento Digital</p>
          <p></p>
          <p className={s.text}>En Evolución Digital, creemos en construir soluciones a medida que se adapten perfectamente a las <span className={s.text_highlight}>necesidades únicas de tu negocio</span>. Te ofrecemos un acompañamiento personalizado desde la concepción de la idea hasta la implementación, asegurándonos de que tu software sea una herramienta poderosa para <span className={s.text_highlight}>impulsar tu crecimiento</span>.</p>
          <p><span className={s.text_highlight}>¿Listo para dar el siguiente paso?</span> ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos!</p>
         <ButtonWhiteHover/>
        </div>
      </article>
    </section>
  );
}

export default AboutUs;
