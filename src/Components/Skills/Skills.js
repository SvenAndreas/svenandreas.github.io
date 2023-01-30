import React from 'react'
import s from './Skills.module.css'
import { BiCodeCurly } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import js from '../../Assets/icons/jsicon.png'
import html from '../../Assets/icons/htmlicon.png'
import firebase from '../../Assets/icons/firebaseicon.png'
import express from '../../Assets/icons/expressicon.png'
import react from '../../Assets/icons/reacticon.png'
import node from '../../Assets/icons/nodeicon.png'
import postgres from '../../Assets/icons/postgresicon.png'
import redux from '../../Assets/icons/reduxicon.png'
import sequelize from '../../Assets/icons/sequelizeicon.png'
import css from '../../Assets/icons/cssicon.png'


function Skills() {
  const handleToggleSkills = (e)=>{
    if(e.currentTarget.className.includes('open')){
      e.currentTarget.classList.add(`${s.skills_close}`)
      e.currentTarget.classList.remove(`${s.skills_open}`)
    }else {
      e.currentTarget.classList.remove(`${s.skills_close}`)
      e.currentTarget.classList.add(`${s.skills_open}`)
    }
  }

  return (
    <section className={`${s.skills} section`} id='skills'>
      <h2 className='section_title'>Skills</h2>
      <span className='section_subtitle'>Technical level</span>
      <div className={`${s.skills_container} container grid`}>  
        
            {/* FRONT-END SKILLS */}
          <div className={`${s.skills_open} fixed`} onClick={handleToggleSkills} id='skills_content'>
            <div className={s.skills_header}>
              <BiCodeCurly className={s.skills_icon}/>
              <div>
                <h1 className={s.skills_title}>Frontend developer</h1>
                <span className={s.skills_subtitle}>1 year</span>
              </div>
              <FaAngleDown className={s.skills_arrow}/>
            </div>
            <div className={`${s.skills_list} grid`}>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>JavaScript</h3>
                  <img src={js} alt='jsicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>React</h3>
                  <img src={react} alt='reacticon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>Redux</h3>
                  <img src={redux} alt='reduxicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>CSS</h3>
                  <img src={css} alt='cssicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>HTML</h3>
                  <img src={html} alt='htmlicon' className={s.skills_icons}/>
                </div>
              </div>
            </div>
          </div>

           {/* BACK-END SKILLS */}
          <div className={`${s.skills_close} fixed`} onClick={handleToggleSkills} id='skills_content'>
            <div className={s.skills_header}>
              <FaServer className={s.skills_icon}/>
              <div>
                <h1 className={s.skills_title}>Backend developer</h1>
                <span className={s.skills_subtitle}>1 year</span>
              </div>
              <FaAngleDown className={s.skills_arrow}/>
            </div>
            <div className={`${s.skills_list} grid`}>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>Node Js</h3>
                  <img src={node} alt='nodeicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>Firebase</h3>
                  <img src={firebase} alt='firebaseicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>Express</h3>
                  <img src={express} alt='expressicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>Sequelize</h3>
                  <img src={sequelize} alt='sequelizeicon' className={s.skills_icons}/>
                </div>
              </div>
              <div className={s.skills_data}>
                <div className={s.skills_titles}>
                  <h3 className={s.skills_name}>PostgresSQL</h3>
                  <img src={postgres} alt='postgresicon' className={s.skills_icons}/>
                </div>
              </div>
            </div>
          </div>

        
      </div>
    </section>
  )
}

export default Skills