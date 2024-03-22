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
      <h2 className="section_title">
        {language === "ES" ? "Sobre mí" : "About me"}
      </h2>
      <span className="section_subtitle">
        {language === "ES" ? "Mi introducción" : "My introduction"}
      </span>
      <div className={`${s.about_container}`}>
        <img className={s.about_img} src={about} alt="perfilImg" />
        <div className={s.about_data}>
          {language === "ES" ? (
            <p className={s.about_description}>
              <span className={s.about_higiligth}>Mi experiencia</span> me
              permite gestionar completamente un proyecto de principio a fin y
              entregar{" "}
              <span className={s.about_higiligth}>
                soluciones de alta calidad
              </span>{" "}
              que satisfacen las necesidades de mis clientes.
              <br></br>
              Doy gran{" "}
              <span className={s.about_higiligth}>
                importancia a la comunicación
              </span>{" "}
              regular y siempre estoy dispuesto a ir más allá para{" "}
              <span className={s.about_higiligth}>
                garantizar la satisfacción
              </span>{" "}
              del cliente. Brindo un{" "}
              <span className={s.about_higiligth}>
                servicio completo y personalizado
              </span>{" "}
              en el que se dé respuesta a tus expectativas y se{" "}
              <span className={s.about_higiligth}>potencien tus ideas</span>.
              <br></br>
              Estoy entusiasmado por asumir nuevos proyectos y ayudarte{" "}
              <span className={s.about_higiligth}>alcanzar tus metas.</span>
              <br></br>
            </p>
          ) : (
            <p className={s.about_description}>
              <span className={s.about_higiligth}>My experience</span> allows me
              to fully manage a project from start to finish and deliver{" "}
              <span className={s.about_higiligth}>high-quality solutions</span>{" "}
              that meet the needs of my clients.
              <br></br>I place great{" "}
              <span className={s.about_higiligth}>
                emphasis on regular communication
              </span>{" "}
              and am always willing to go above and beyond to{" "}
              <span className={s.about_higiligth}>
                ensure client satisfaction
              </span>
              . I provide a{" "}
              <span className={s.about_higiligth}>
                comprehensive and personalized service
              </span>{" "}
              where your expectations are met and your{" "}
              <span className={s.about_higiligth}>ideas are empowered</span>.
              <br></br>I am excited to take on new projects and help you{" "}
              <span className={s.about_higiligth}>achieve your goals.</span>
              <br></br>
            </p>
          )}

          <div className={s.about_buttons}>
            <a download href={cv} className="button">
              {language === "ES" ? "Descargar CV" : "Download CV"}{" "}
              <FiDownload className="button_icon" />
            </a>
            <a href={cv} target="_blank" rel="noreferrer" className="button">
              {language === "ES" ? "Ver en linea" : "View online"}{" "}
              <AiOutlineFilePdf className="button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
