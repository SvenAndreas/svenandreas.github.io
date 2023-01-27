import React from 'react'
import s from './Services.module.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { TiTimes } from 'react-icons/ti'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsChevronExpand } from 'react-icons/bs'
import { FcDataConfiguration } from 'react-icons/fc'

function Services() {
  const handleOpenModal=(e)=>{
    const modal = document.getElementsByClassName(e.currentTarget.id)
    modal[0].showModal()
  }

  const handleCloseModal=(e)=>{
    const modal = document.getElementsByClassName(e.currentTarget.id)
    modal[0].close()
  }

  return (
    <section className={`${s.services} section`} id='service'>
      <h2 className='section_title'>Services</h2>
      <span className='section_subtitle'>What i offer</span>

      <div className={`${s.services_container} container grid`}>

        <div className={s.services_content}>
          <div>
            <BsChevronExpand className={s.services_icon} style={{transform:'rotate(90deg)'}}/>
            <h3 className={s.services_title}>Frontend <br/> developer</h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='frontend' onClick={handleOpenModal}>
            View more
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>

          <dialog className={`${s.services_modal} frontend`}>
            <h4 className={s.services_modal_title}>Frontend <br/> developer</h4>
            <TiTimes className={s.services_modal_close_button} onClick={handleCloseModal} id='frontend'/>
            <ul className={`${s.services_ul} grid`}>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Ux Ui</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Web page development</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>App development</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Ux Ui</p>
              </li>
            </ul>
          </dialog>
        </div>

        <div className={s.services_content}>
          <div>
            <FcDataConfiguration className={s.services_icon}/>
            <h3 className={s.services_title}>Backend <br/> developer</h3>
          </div>
          <span className={`${s.services_button} button_small button_link`} id='backend' onClick={handleOpenModal}>
            View more
            <BsArrowRightShort className={`${s.services_button_icon} button_icon `}/>
          </span>
          <dialog className={`${s.services_modal} backend`}>
            <h4 className={s.services_modal_title}>Backend developer</h4>
            <TiTimes className={s.services_modal_close_button}  onClick={handleCloseModal} id='backend'/>
            <ul className={`${s.services_ul} grid`}>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Ux Ui</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Web page development</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>App development</p>
              </li>
              <li className={s.services_li}>
                <BsCheck2Circle className={s.services_modal_check_icon}/>
                <p>Ux Ui</p>
              </li>
            </ul>
          </dialog>
        </div>
      </div>
    </section>
  )
}

export default Services