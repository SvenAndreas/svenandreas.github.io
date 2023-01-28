import React from 'react'
import s from './Contactme.module.css'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { InputBase, TextField } from '@mui/material'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSend } from 'react-icons/ai'
function Contactme() {
  return (
    <section className={`${s.contact} section`}>
      <h2 className='section_title'>Contact me</h2>
      <span className='section_subtitle'>Get in touch</span>

      <div className={`${s.contact_container} container grid`}>
        <div>
          <div className={s.contact_information}>
            <BsWhatsapp className={s.contact_icon}/>
            <div>
              <h3 className={s.contact_title}>Call me</h3>
              <span className={s.contact_subtitle}>{`(+54) 11 3367 1001`}</span>
            </div>
          </div>
          <div className={s.contact_information}>
            <AiOutlineMail className={s.contact_icon}/>
            <div>
              <h3 className={s.contact_title}>Email</h3>
              <span className={s.contact_subtitle}>svenandreasclausz@gmail.com</span>
            </div>
          </div>
          <div className={s.contact_information}>
            <GoLocation className={s.contact_icon}/>
            <div>
              <h3 className={s.contact_title}>Location</h3>
              <span className={s.contact_subtitle}>Casa Grande - Córdoba - Argentina</span>
            </div>
          </div>

          <form className={`${s.contact_form} grid`}>
            <div className={`${s.contact_inputs_container} grid`}>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label="Name"  variant="standard"  fullWidth InputLabelProps={{className:`${s.textfield}`}}  />
              </div>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label="Email" variant="standard" fullWidth InputLabelProps={{className:`${s.textfield}`}} />
              </div>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label="Subject" variant="standard" fullWidth InputLabelProps={{className:`${s.textfield}`}} />
              </div>
              <div className={s.contact_content} InputLabelProps={{className:`${s.textfield}`}}>
              <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                variant="standard"
                minRows={4}
                fullWidth
                InputLabelProps={{className:`${s.textfield}`}}
              />
              </div>
              <div>
                <a href='#' className='button'>
                  Send Message
                  <AiOutlineSend className='button_icon'/>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contactme