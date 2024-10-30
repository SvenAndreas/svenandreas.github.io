import React from "react";
import s from "./MovingServices.module.css";
import web from "../../../Assets/escritorio.jpeg";
import megaphone from "../../../Assets/megaphone.jpeg";
import soft from "../../../Assets/software.jpg";
import CheckUL from "../../../Components/UL/CheckUL/CheckUL";
import useScrollReveal from "../../../CustomHooks/useScrollReveal";
import { webService,softwareServices, marketingServices } from './Constants'
function MovingServices() {

  const  {textBoxesRef,imagesRef,handleRef} = useScrollReveal()
  
  return (
    <section className={`${s.section} section `}>
      <div className={`${s.title_container}`}>
        <h2 className={` section_title`}>
          NUESTROS SERVICIOS
        </h2>
        <p className={`section_subtitle ${s.section_subtitle}`}>
          Somos parte de tu equipo. Si te va bien, a nosotros también.
        </p>
      </div>
      <article className={s.section_container}>
        <div className={s.container}>
          {/* <h2
            ref={(el) => handleRef(titles, 0, el)}
            className={`${s.slide_in_left} section_title ${s.title} `}
          >
            Diseño web
          </h2> */}
          <div className={`${s.content} `}>
           
            <div
              ref={(el) => handleRef(textBoxesRef, 0, el)}
              className={`${s.text_box} ${s.slide_in_left} `}
            >
              <div>
                <h3 className={s.card_title}>El poder de un buen diseño</h3>
                <h4 className={s.card_subtitle}>
                  Crea una presencia online impactante y profesional
                </h4>
              </div>
              <CheckUL array={webService} />
            </div>
            <div
              ref={(el) => handleRef(imagesRef, 0, el)}
              className={`${s.img_container} ${s.slide_in_bottom} `}
            >
              <img src={web} alt="img" />
            </div>
          </div>
          
          <div className={s.media_items}></div>
        </div>
      </article>

      <article className={s.section_container}>
        <div className={s.container}>
          {/* <h2
            ref={(el) => handleRef(titles, 1, el)}
            className={`${s.title} ${s.slide_in_left} section_title`}
          >
            Desarrollo de Apps
          </h2> */}
          <div className={s.content}>
            <div
              ref={(el) => handleRef(imagesRef, 1, el)}
              className={`${s.img_container} ${s.slide_in_bottom} `}
            >
              <img src={soft} alt="img" />
            </div>
            <div
              ref={(el) => handleRef(textBoxesRef, 1, el)}
              className={`${s.text_box} ${s.slide_in_right}`}
            >
              <div>
                <h3>Software Personalizado</h3>
                <h4>Aumenta la eficiencia y productividad</h4>
              </div>
              <CheckUL array={softwareServices} />
            </div>
          </div>
          <div className={s.media_items}></div>
        </div>
      </article>

      <article className={s.section_container}>
        <div className={s.container}>
          {/* <h2
            ref={(el) => handleRef(titles, 2, el)}
            className={`${s.title} ${s.slide_in_right} section_title`}
          >
            Marketing Digital
          </h2> */}
          <div className={`${s.content} `}>
           
            <div
              ref={(el) => handleRef(textBoxesRef, 2, el)}
              className={`${s.text_box} ${s.slide_in_left}`}
            >
              <div>
                <h3>Convierte visitas en clientes</h3>
                <h4>Impulsa tu negocio con estrategias digitales efectivas</h4>
              </div>
              <CheckUL array={marketingServices} />
            </div>
            <div
              ref={(el) => handleRef(imagesRef, 2, el)}
              className={`${s.img_container} ${s.slide_in_bottom} `}
            >
              <img src={megaphone} alt="img" />
            </div>
          </div>
          <div className={s.media_items}></div>
        </div>
      </article>
    </section>
  );
}

export default MovingServices;
