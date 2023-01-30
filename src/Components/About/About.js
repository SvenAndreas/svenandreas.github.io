import React from 'react'
import s from './About.module.css'
import {FiDownload} from 'react-icons/fi'
import about from '../../Assets/about.jpeg'

function About() {
  return (
    <section className={`${s.about} section`} id='about'>
      <h2 className='section_title'>About me</h2>
      <span className='section_subtitle'>My introduction</span>
      <div className={`${s.about_container} container grid`}>
        <img className={s.about_img} src={about} alt='perfilImg' />
        <div className={s.about_data}>
          <p className={s.about_description}>Ipsoun lorum nowem sies work experience long working  , giveing great quality solutions</p>
          <div className={s.about_buttons}>
            <a download='' href='../../Assets/cv.pdf' className='button'>
            Download CV <FiDownload className='button_icon'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About