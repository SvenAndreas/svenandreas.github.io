import React, { useContext } from "react";
import s from "./Home.module.css";
import { LanguageContext } from "../../Contexts/languageContext";

function Home() {
  // const { language } = useContext(LanguageContext);
  // const imgRef=useScrollEffect()
  const language= 'ES'
  return (
    <section className={`${s.home}  ${s.home_overlay} section`} id="home">
      <div className={` ${s.home_container} `}>
        <div className={`${s.home_content} `}>
          {/* <div className={s.home_social}>
              <a href='https://www.linkedin.com/in/sven-andreas-clausz' target='_blank' rel='noreferrer' className={s.home_social_icon}>
                <SlSocialLinkedin/>
              </a>
              <a href='https://github.com/SvenAndreas' target='_blank' rel='noreferrer' className={s.home_social_icon}>
                <RiGithubLine/>
              </a>s
            </div> */}
          {/* <div className={s.home_img}> */}

          {/* <svg viewBox="4 20 250 147" className={s.home_blob} style={{position:'relative'}}  >
                <mask id="mask0" mask-type="alpha">
                  <rect x="0" y="0" width="150" height="187" fill="#fff"/>
                </mask>
                <g mask="url(#mask0)">
                  <rect x="0" y="0" width="200" height="200" fill="#fefbfd"/>
                  <image className={s.home_blob_image} href={profile} x='0' y='10'/>
                </g>
              </svg> */}

          {/* <svg className={s.home_blob} style={{position:'relative'}} viewBox="0 0 200 187">
                <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    
                </mask>
                <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  <image className={s.home_blob_image} href={profile} x='30' y='0'/>
                
              </g>
            </svg> */}

          {/* <svg className={s.home_blob} style={{position:'relative'}} viewBox="0 0 200 200  ">
              <circle cx="100" cy="100" r="100" fill="#fff"/>
              <mask id="mask0" mask-type="alpha">
                <circle cx="100" cy="100" r="100" fill="#fff"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className={s.home_blob_image} href={profile} x='30' y='0'/>
              </g>
            </svg> */}

          {/* <img src={profile} alt='prfo' className={s.home_img_content}/> */}

          {/* </div> */}

          <div className={`${s.home_data}`}>
            {/* <div className={s.home_logo_container}>
              <img
                alt="Evolucion digital Logo, árbol digital con ramificaciones y raíces que simulan conexiones electrónicas."
                width={1322}
                height={1600}
                className={s.home_logo_img}
                src={logo}
              />
              <p className={s.home_logo}>
                EVOLUCIÓN DIGITAL
                <p className={s.home_logo_subtitle}>IMPULSÁ TU NEGOCIO</p>
              </p>
            </div> */}
            <h1 className={`${s.home_title}`}>
              {language === "ES"
                ? "DESARROLLAMOS TECNOLOGÍA PARA"
                : "We develop"}
              <span className={s.home_title_secondpart}>
                {" "}
                <span className={s.home_title_highlight}>
                  IMPULSAR TU NEGOCIO.
                </span>{" "}
              </span>
            </h1>
            <h2 className={`section_subtitle ${s.home_subtitle} ${s.illuminated_text}`}>
              DISEÑO WEB | SOFTWARE A MEDIDA | MARKETING DIGITAL
            </h2>
            <a href="#contact" className={s.home_button}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              DESPEGAR
            </a>
          </div>
        </div>

      </div>
      {/* <div class={s.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      {/* <div className={s.home_rigth_container}></div> */}
      {/* <img src={wave} alt='wave' className={s.home_wave}/> */}
    </section>
  );
}

export default Home;
