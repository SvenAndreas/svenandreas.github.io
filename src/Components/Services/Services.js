import React, { useContext } from 'react'
import s from './Services.module.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { TiTimes } from 'react-icons/ti'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsChevronExpand } from 'react-icons/bs'
import { FcDataConfiguration } from 'react-icons/fc'
import { LanguageContext } from '../../Contexts/languageContext'

function Services() {
  const handleOpenModal=(e)=>{
    const modal = document.getElementsByClassName(e.currentTarget.id)
    modal[0].showModal()
  }

  const handleCloseModal=(e)=>{
    const modal = document.getElementsByClassName(e.currentTarget.id)
    modal[0].close()
  }
const {language} = useContext(LanguageContext)
  return (
    <section className={`${s.services} section`} id='service'>
      <h2 className='section_title'>{language === 'ES' ? 'Servicios' : 'Services'}</h2>
      <span className='section_subtitle'>{language === 'ES' ? 'Lo que ofrezco' : 'What i offer'}</span>
      <div>
        <h3>Chatbots con AI</h3>
        <h3>Desarrollo de aplicaciones de comercio electronico </h3> 
        <h3>Integración de pasarelas de pago </h3> 
      </div>
      <div className={`${s.services_container} container grid`}>

        <div className={s.services_content}>
          <div>
            <BsChevronExpand className={s.services_icon} style={{transform:'rotate(90deg)'}}/>
            <h3 className={s.services_title}>{language === 'ES' ? 'Desarrollador' : 'Frontend'} <br/>{language === 'ES' ? 'fronted' : 'developer'}</h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='frontend' onClick={handleOpenModal}>
            {language === 'ES' ? 'Ver más' : 'View more'}
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>

          <dialog className={`${s.services_modal} frontend`}>
            <h4 className={s.services_modal_title}>{language === 'ES' ? 'Desarrollador' : 'Frontend'} <br/>{language === 'ES' ? 'fronted' : 'developer'}</h4>
            <TiTimes className={s.services_modal_close_button} onClick={handleCloseModal} id='frontend'/>
            <ul className={`${s.services_ul} grid`}>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Desarrollo la interfaz gráfica y diseño las interacciones para optimizar la experiencia del usuario.' :'I develop UI and create UX elements interactions.'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Páginas web responsivas':'Responsive web desing'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Desarrollo de aplicaciones móviles': 'App development'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Integración de APIs de terceros':'APIs and Back-end services integration.'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ?'Mantenimiento y actualización de apps existentes' :'Manteinence and updates of existing apps'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Código escalable y bien organizado':'Readble, scalable and well organized code'}</p>
              </li>
            </ul>
          </dialog>
        </div>

        <div className={s.services_content}>
          <div>
            <FcDataConfiguration className={s.services_icon}/>
            <h3 className={s.services_title}>{language === 'ES' ? 'Desarrollador' : 'Backend' }<br/> {language === 'ES' ?'backend' : 'developer'}</h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='backend' onClick={handleOpenModal}>
            View more
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>
          <dialog className={`${s.services_modal} backend`}>
            <h4 className={s.services_modal_title}>{language === 'ES' ? 'Desarrollador' : 'Backend'} <br/> {language === 'ES' ? 'backend' : 'developer'}</h4>
            <TiTimes className={s.services_modal_close_button}  onClick={handleCloseModal} id='backend'/>
            <ul className={`${s.services_ul} grid`}>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Desarrollo de APIs e integración de APIs de terceros' : 'API development and integration with third-party APIs'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Diseño y administración de base de datos' :'Database desing and management'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Autentificación y autorización' :'Authentication and authorization'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Mantenimiento y actualización de apps existentes': 'Maitenance and updates of existing apps'}</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>{language === 'ES' ? 'Código escalable y bien organizado' : 'Readble, scalable and well organized code'}</p>
              </li>
            </ul>
          </dialog>
        </div>
      </div>
    </section>
  )
}

export default Services