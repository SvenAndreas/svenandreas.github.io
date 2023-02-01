import React from 'react'
import s from './About.module.css'
import {FiDownload} from 'react-icons/fi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import about from '../../Assets/about.jpeg'
import cv from '../../Assets/cv.pdf';

function About() {
  return (
    <section className={`${s.about} section`} id='about'>
      <h2 className='section_title'>About me</h2>
      <span className='section_subtitle'>My introduction</span>
      <div className={`${s.about_container} container grid`}>
        <img className={s.about_img} src={about} alt='perfilImg' />
        <div className={s.about_data}>
          <p className={s.about_description}>
            I'm a full-stack developer with experience building websites and online applications.
            My expertise allows me to fully manage a project from start to finish and deliver high-quality solutions that meet the needs of my clients. I place a high importance on regular communication and i'm always willing to go the extra mile to ensure client satisfaction. I'm excited to take on new projects and help clients achieve their objectives. I would love to discuss your project further and see how I can help you achieve your goals.
          </p>
          <div className={s.about_buttons}>
            <a download href={cv} className='button'>
            Download CV <FiDownload className='button_icon'/>
            </a>
            <a href={cv} target='_blank' className='button'>
            View Online <AiOutlineFilePdf className='button_icon'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About