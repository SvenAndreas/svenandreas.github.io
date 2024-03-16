import React, { useContext } from "react";
import s from "./About.module.css";
import { FiDownload } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import about from "../../Assets/about.jpeg";
import cv from "../../Assets/cv.pdf";
import { LanguageContext } from "../../Contexts/languageContext";

function About() {
  const { language } = useContext(LanguageContext);
  return (
    <section className={`${s.about} section`} id="about">
      <h2 className="section_title">{language === 'ES' ? 'Sobre mí' : 'About me'}</h2>
      <span className="section_subtitle">{language === 'ES' ? 'Mi introducción' : 'My introduction'}</span>
      <div className={`${s.about_container} container grid`}>
        <img className={s.about_img} src={about} alt="perfilImg" />
        <div className={s.about_data}>
          {language === "ES" ? (
            <p className={s.about_description}>
              {/* Tengo experiencia en la construcción de{" "}
              <span className={s.about_higiligth}>
                aplicaciones web y movíles (IOS & Android)
              </span>
              .<br></br> */}
              <span className={s.about_higiligth}>Mi experiencia</span> me permite gestionar completamente un proyecto de
              principio a fin y entregar{" "}
              <span className={s.about_higiligth}>
                soluciones de alta calidad
              </span>{" "}
              que satisfacen las necesidades de mis clientes.
              <br></br>
              Doy gran <span className={s.about_higiligth}>importancia a la comunicación</span> regular y siempre estoy
              dispuesto a ir más allá para <span className={s.about_higiligth}>garantizar la satisfacción</span>  del
              cliente.
              <br></br>
              Estoy entusiasmado por asumir nuevos proyectos y ayudar a los
              clientes a <span className={s.about_higiligth}>alcanzar sus objetivos.</span>
              <br></br>
            
              Me encantaría discutir más sobre tu proyecto y ver cómo puedo
              ayudarte a{" "}
              <span className={s.about_higiligth}>alcanzar tus metas</span>.
            </p>
          ) : (
            <p className={s.about_description}>
              I have experience building
              <span className={s.about_higiligth}>
                {" "}
                web and mobile (IOS & Android) applications.
              </span>{" "}
              My expertise allows me to fully manage a project from start to
              finish and <span className={s.about_higiligth}>deliver high-quality solutions</span> that meet the needs of
              my clients. I place a high importance on regular communication and
              i'm always willing to go the extra mile to ensure <span className={s.about_higiligth}>client
              satisfaction</span>. I'm excited to take on new projects and help clients
              achieve their objectives. I would love to discuss your project
              further and see how I can help you <span className={s.about_higiligth}>achieve your goals.</span>
            </p>
          )}

          <div className={s.about_buttons}>
            <a download href={cv} className="button">
              {language === 'ES' ? 'Descargar CV' : 'Download CV'} <FiDownload className="button_icon" />
            </a>
            <a href={cv} target="_blank" rel="noreferrer" className="button">
              {language === 'ES' ? 'Ver en linea' : 'View online'} <AiOutlineFilePdf className="button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
