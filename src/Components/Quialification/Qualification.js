import React,{useState} from 'react'
import s from './Qualification.module.css'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FcGraduationCap } from 'react-icons/fc'
import { GoCalendar } from 'react-icons/go'

function Qualification() {
  const [isActive,setIsActive] = useState(true)

  const handleDisplaySections = (e)=>{
    const noDisplayed = document.getElementsByClassName(e.currentTarget.id)
    if(noDisplayed[0].className.includes('display'))
    setIsActive(!isActive)
    else return
  }
  return (
    <section className={`${s.qualification} section`}>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My personal journey</span>

      <div className={`${s.qualification_container} container`}>
        
        <div className={s.qualification_tabs}>
          <div className={`${s.qualification_button} ${isActive ? s.qualification_button_active : ""}`} onClick={handleDisplaySections} id='education'>
            <FcGraduationCap className={s.qualification_icon}/>
            Education
          </div>

          <div className={`${s.qualification_button} ${isActive ? "" : s.qualification_button_active }`} onClick={handleDisplaySections} id='work'>
            <BsFillBriefcaseFill className={s.qualification_icon}/>
            Work
          </div>
        </div>

        <div className={s.qualification_sections}>
          <div className={`${s.qualification_content} ${isActive ? "" : s.display_none} education`}>

            <div className={s.qualification_data}>
              <div>
                <h3 className={s.qualification_title}>Fullstack developer</h3>
                <span className={s.qualification_subtitle}>Argentina - soyHenry Bootcamp</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2022-2023
                </div>
              </div>
              <div>
                <span className={s.qualification_rounder}></span>
                <span className={s.qualification_line}></span>
              </div>
            </div>

            <div className={s.qualification_data}>
              <div></div>
                <div>
                  <span className={s.qualification_rounder}></span>
                  <span className={s.qualification_line}></span>
                </div>
              <div>
                <h3 className={s.qualification_title}>Photography and Photoshop</h3>
                <span className={s.qualification_subtitle}>Argentina - Motivarte</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2008-2010
                </div>
              </div>
            </div>

            <div className={s.qualification_data}>
              <div>
                <h3 className={s.qualification_title}>Law university</h3>
                <span className={s.qualification_subtitle}>Argentina - UBA</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2008-2010
                </div>
              </div>
              <div>
                <span className={s.qualification_rounder}></span>
                {/* <span className={s.qualification_line}></span> */}
              </div>
            </div>

          </div>

          <div className={`${s.qualification_content} ${isActive ? s.display_none : "" } work`}>

            <div className={s.qualification_data}>
              <div>
                <h3 className={s.qualification_title}>Business Owner</h3>
                <span className={s.qualification_subtitle}>Argentina - Urbantech</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2018-2022
                </div>
              </div>
              <div>
                <span className={s.qualification_rounder}></span>
                <span className={s.qualification_line}></span>
              </div>
            </div>

            <div className={s.qualification_data}>
              <div></div>
                <div>
                  <span className={s.qualification_rounder}></span>
                  <span className={s.qualification_line}></span>
                </div>
              <div>
                <h3 className={s.qualification_title}>Gastronomic Ventures</h3>
                <span className={s.qualification_subtitle}>Argentina</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2011-2018
                </div>
              </div>
            </div>

            <div className={s.qualification_data}>
              <div>
                <h3 className={s.qualification_title}>Cheff</h3>
                <span className={s.qualification_subtitle}>EEUU - LoveCatering</span>
                <div className={s.qualification_calendar}>
                  <GoCalendar/>
                  2010-2011
                </div>
              </div>
              <div>
                <span className={s.qualification_rounder}></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification