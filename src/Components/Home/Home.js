import React from 'react'
import s from './Home.module.css'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineSend } from 'react-icons/ai'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { AiOutlineArrowDown } from 'react-icons/ai'
import profile from '../../Assets/perfil.png'

function Home() {
  return (
    <section className='section' id='home'>
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
            <svg className={s.home_blob} style={{position:'relative'}} viewBox="0 0 200 187">
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

           </svg>
         </div>

         <div className={s.home_data}>
            <h1 className={s.home_title}>Hi,I'm Sven Andreas Clausz</h1>
            <h3 className={s.home_subtitle}>Fullstack developer Frontend oriented</h3>
            <p className={s.home_description}>Impus lorum add shomting later now just makeing it work</p>
            <a href='#contact' className='button'>
              Contact Me
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
    </section>
  )
}

export default Home