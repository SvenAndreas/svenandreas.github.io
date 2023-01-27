import React from 'react'
import s from './Portfolio.module.css'
import henry from '../../Assets/henrygadget.gif'
import { BsArrowRightShort } from 'react-icons/bs'

function Portfolio() {
  return (
    <section className={`${s.portfolio} section`}>
      <h2 className='section_title'>Portfolio</h2>
      <span className='section_subtitle'>Works</span>
      <div className={`${s.portfolio_container} container`}>
        <div>
          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>E-commerce web app</h3>
              <p className={s.portfolio_description}>A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
              <a href='#' target='_blank' className={`${s.portfolio_button} button_small button`}>
                Demo
                <BsArrowRightShort className={`${s.portfolio_button_icon} button_icon `}/>
              </a>
            </div>
          </div>
        </div>

        <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>CRUD SPA</h3>
              <p className={s.portfolio_description}>A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
              <a href='#' target='_blank' className={`${s.portfolio_button} button_small button`}>
                Demo
                <BsArrowRightShort className={`${s.portfolio_button_icon} button_icon `}/>
              </a>
            </div>
          </div>

          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>E-commerce web app</h3>
              <p className={s.portfolio_description}> A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
              <a href='#' target='_blank' className={`${s.portfolio_button} button_small button`}>
                Demo
                <BsArrowRightShort className={`${s.portfolio_button_icon} button_icon `}/>
              </a>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Portfolio