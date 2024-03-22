import React, { useContext } from 'react'
import s from './Services.module.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { TiTimes } from 'react-icons/ti'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsChevronExpand } from 'react-icons/bs'
import { FcDataConfiguration } from 'react-icons/fc'
import { LanguageContext } from '../../Contexts/languageContext'
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StoreIcon from '@mui/icons-material/Store';
import AdbIcon from '@mui/icons-material/Adb';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WebIcon from '@mui/icons-material/Web';
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
     
      <div className={`${s.services_container} container grid`}>

        <div className={s.services_content}>
          <div>
            <BsChevronExpand className={s.services_icon} style={{transform:'rotate(90deg)'}}/>
            <h3 className={s.services_title}>{language === 'ES' ? 'Frontend' : 'Frontend'} 
            {/* <br/>{language === 'ES' ? 'fronted' : 'developer'} */}
            </h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='frontend' onClick={handleOpenModal}>
            {language === 'ES' ? 'Ver más' : 'View more'}
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>

          <dialog className={`${s.services_modal} frontend`}>
            <h4 className={s.services_modal_title}>{language === 'ES' ? 'Frontend' : 'Frontend'}
             {/* <br/>{language === 'ES' ? 'fronted' : 'developer'} */}
             </h4>
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
            <h3 className={s.services_title}>{language === 'ES' ? 'Backend' : 'Backend' }
            {/* <br/> {language === 'ES' ?'backend' : 'developer'} */}
            </h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='backend' onClick={handleOpenModal}>
            {language === 'ES' ? 'Ver más' :'View more'}
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>
          <dialog className={`${s.services_modal} backend`}>
            <h4 className={s.services_modal_title}>{language === 'ES' ? 'Backend' : 'Backend'} 
            {/* <br/> {language === 'ES' ? 'backend' : 'developer'} */}
            </h4>
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
     
    
      <div className={s.services_provided_container}>
  <div className={s.services_provided_individual_container}>
    <TerminalIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Custom software development' : 'Desarrollo de software a medida'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Custom software solutions tailored to the specific needs of your business.' : 'Soluciones de software personalizadas que se adaptan a las necesidades específicas de tu negocio.'}</p>
  </div>
  <div className={s.services_provided_individual_container}>
    <WebIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Landing page' : 'Landing page'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Crafting captivating, customized landing pages for your brand, designed to grab attention and encourage customer action.' : 'Creación de sitios web y landing page atractivas peronalizadas para tu marca, diseñadas para captar la atención e incentivar la acción del cliente.'}</p>
  </div>
  <div className={s.services_provided_individual_container}>
    <AdbIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Mobile applications' : 'Aplicaciones móviles'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Custom mobile applications for iOS and Android, offering a smooth and engaging experience for your users.' : 'Aplicaciones móviles personalizadas para iOS y Android, ofreciendo una experiencia fluida y atractiva para tus usuarios.'}</p>
  </div>
  <div className={s.services_provided_individual_container}>
    <PsychologyIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Chatbot automation with AI' : 'Automatización de chatbots con IA'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Artificial intelligence technologies to automate tasks, improve customer service, and increase operational efficiency of your business. Integration with WhatsApp.' : 'Tecnologías de inteligencia artificial para automatizar tareas, mejorar la atención al cliente y aumentar la eficiencia operativa de tu empresa. Integración con WhatsApp.'}</p>
  </div>
  
  <div className={s.services_provided_individual_container}>
    <StoreIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'E-commerce development' : 'Desarrollo de E-commerce'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Customized and highly functional online stores that allow you to sell your products or services efficiently and securely.' : 'Tienda en línea personalizadas y altamente funcionales que te permiten vender tus productos o servicios de manera eficiente y segura.'}</p>
  </div>
  <div className={s.services_provided_individual_container}>
    <CreditCardIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Payment gateway integration' : 'Integración de pasarelas de pago'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'Facilitating the payment process on your website by integrating secure and reliable payment gateways.' : 'Facilitando el proceso de pago en tu sitio web integrando pasarelas de pago seguras y confiables.'}</p>
  </div>
  {/* <div className={s.services_provided_individual_container}>
    <SecurityUpdateGoodIcon fontSize='20' className={s.services_provided_icons}/>
    <h3 className={s.services_provided_title}>{language === 'EN' ? 'Responsive design' : 'Diseño responsivo'}</h3>
    <p className={s.services_provided_description}>{language === 'EN' ? 'From mobile phones to desktop computers, your website will look and function optimally on any device.' : 'Desde teléfonos móviles hasta computadoras de escritorio, tu sitio web se verá y funcionará de manera óptima en cualquier dispositivo.'}</p>
  </div> */}
 
</div>

    </section>
  )
}

export default Services