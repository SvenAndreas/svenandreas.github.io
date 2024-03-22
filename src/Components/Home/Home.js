import React, { useContext } from 'react'
import s from './Home.module.css'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineSend } from 'react-icons/ai'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { AiOutlineArrowDown } from 'react-icons/ai'
import profile from '../../Assets/perfil.png'
import useScrollEffect from '../../CustomHooks/useScrollEffect'
import { LanguageContext } from '../../Contexts/languageContext'


function Home() {
  const {language} = useContext(LanguageContext)
  const imgRef=useScrollEffect()
  return (
    <section className={`${s.home} section`} id='home'>
      <div className={` ${s.home_container} container grid`}>
        <div className={`${s.home_content} grid`}>
            <div className={s.home_social}>
              <a href='https://www.linkedin.com/in/sven-andreas-clausz' target='_blank' rel='noreferrer' className={s.home_social_icon}>
                <SlSocialLinkedin/>
              </a>
              <a href='https://github.com/SvenAndreas' target='_blank' rel='noreferrer' className={s.home_social_icon}>
                <RiGithubLine/>
              </a>
            </div>
            <div className={s.home_img}>
              
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

            <svg className={s.home_blob} style={{position:'relative'}} viewBox="0 0 200 200  ">
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
            </svg>
                      
            {/* <img src={profile} alt='prfo' className={s.home_img_content}/> */}
            
            </div>

            <div className={s.home_data}>
                <h1 className={s.home_title}>{language === 'ES' ? 'Hola, soy Sven Andreas Clausz' :"Hi, I'm Sven Andreas Clausz"}</h1>
                <h3 className={s.home_subtitle}>{language === 'ES' ? 'Desarrollador de software':"Software developer"}</h3>
                {language === 'ES' ? <p className={s.home_description}>Construyo <span className={s.home_highligth}>sitios web y aplicaciones móviles (IOS & Android) y web</span>  intuitivas con diseños exclusivos, manteniéndome a la vanguardia de las últimas tendencias tecnológicas.<br></br> Ayudando a aumentar la eficiencia de tu negocio.</p> : <p className={s.home_description}>Developing <span className={s.home_highligth}>intuitive websites and applications for mobile (iOS & Android) and web</span> with exclusive designs, staying at the forefront of the latest technological trends.<br></br> Helping to <span className={s.home_highligth}>increase the efficiency of your business.</span></p>}
                <a href='#contact' className='button_secondary'>
                  {language === 'ES' ? 'Contáctame' : 'Contact Me'}
                  <AiOutlineSend className='button_icon'/>
                </a>
            </div>
        </div>

        <div className={s.home_scroll}>
          <a href='#about' className={s.home_scroll_button}>
            <CiDesktopMouse2 className={s.home_scroll_mouse}/>
            <span className={s.home_scroll_name}>Scroll down</span>
            <AiOutlineArrowDown className={s.home_scroll_arrow}/>
          </a>
        </div>
      </div>
      {/* <img src={wave} alt='wave' className={s.home_wave}/> */}
    </section>
  )
}

export default Home