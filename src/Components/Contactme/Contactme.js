import React,{useState, useContext} from 'react'
import s from './Contactme.module.css'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FormHelperText, TextField } from '@mui/material'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSend } from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import { validateForm } from '../../Utils/ValidateForm'
import { TiTimes } from 'react-icons/ti'
import {AiFillCheckCircle} from 'react-icons/ai'
import Loader from '../Loader/Loader'
import { LanguageContext } from '../../Contexts/languageContext'


function Contactme() {
  const initialState = {
    user_name:'',
    user_email:'',
    user_subject:'',
    user_message:''
  }
  const [form,setForm] = useState(initialState)
  const [errors,setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e)=>{
    setForm(prev =>({...prev,[e.target.name]:e.target.value}))
  }

  const handleCloseModal = ()=>{
    const modal = document.getElementById('ok')
    modal.close()
  }
  const {language} = useContext(LanguageContext)

  const sendEmail = (e)=>{
    e.preventDefault();
    
    const modal = document.getElementById('ok')
    const {errors,isValid} = validateForm(form,language)
    setErrors(errors)
    if(isValid){
      setIsLoading(!isLoading)
      const userInfo = document.getElementById('form')
      emailjs.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE,userInfo,'rY3T5mmDT_HW68XLk')
      .then(res=> {
          setIsLoading(false)
          modal.showModal()
          setForm(initialState)
      }
        )
      .catch(e=> {
        setIsLoading(false)
        console.log(e)
      })
    }
  }
  return (
    <section className={`${s.contact} section`} id='contact'>
      <h2 className='section_title'>{language === 'ES' ?'Contacto':'Contact me'}</h2>
      <span className='section_subtitle'>{language === 'ES' ?'Envíame un mensaje':'Get in touch'}</span>

      <div className={`${s.contact_container} container grid`}>
        <div>
          <div className={s.contact_information}>
            <BsWhatsapp className={s.contact_icon}/>
            <div>
              <h3 className={s.contact_title}>WhatsApp</h3>
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
              <h3 className={s.contact_title}>{language === 'ES' ? 'Locación': 'Location'}</h3>
              <span className={s.contact_subtitle}>Casa Grande - Córdoba - Argentina</span>
            </div>
          </div>

          
        </div>
        <form className={`${s.contact_form} grid`} id='form'>
            <div className={`${s.contact_inputs_container} grid`}>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label={language === 'ES' ? 'Nombre':"Name"} name='user_name' value={form.user_name} onChange={handleInputChange} variant="standard"  fullWidth InputLabelProps={{className:`${s.textfield}`}}  />
                <FormHelperText className={s.contact_helpertext}>{errors.user_name ? errors.user_name : ''}</FormHelperText>
              </div>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label="Email" name='user_email' value={form.user_email} onChange={handleInputChange} variant="standard" fullWidth InputLabelProps={{className:`${s.textfield}`}} />
                <FormHelperText className={s.contact_helpertext}>{errors.user_email ? errors.user_email : ''}</FormHelperText>
              </div>
            </div>
              <div className={s.contact_content}>
                <TextField id="standard-basic" label={language === 'ES' ? 'Tema' :'Subject'} name='user_subject' value={form.user_subject} onChange={handleInputChange} variant="standard" fullWidth InputLabelProps={{className:`${s.textfield}`}}/>
                <FormHelperText className={s.contact_helpertext}>{errors.user_subject ? errors.user_subject : ''}</FormHelperText>
              </div>
              <div className={s.contact_content} InputLabelProps={{className:`${s.textfield}`}}>
              <TextField
                id="standard-multiline-static"
                label={language === 'ES' ? 'Mensaje': "Message"}
                multiline
                variant="standard"
                minRows={7}
                fullWidth
                InputLabelProps={{className:`${s.textfield}`}}
                name='user_message' 
                value={form.user_message} 
                onChange={handleInputChange}
              />
                <FormHelperText className={s.contact_helpertext}>{errors.user_message ? errors.user_message : ''}</FormHelperText>
              </div>
              <div>
                <a className='button' onClick={sendEmail}>
                  Send Message
                  <AiOutlineSend className='button_icon'/>
                </a>
              </div>
            
          </form>
          <dialog className={`${s.contact_modal}`} id='ok'>
            <div style={{display:'grid', placeItems:'center'}}>
              <AiFillCheckCircle className={s.contact_modal_checkicon}/>
            </div>
            <div className='grid'>
              <h4 className={s.contact_modal_subtitle}>Email sucssesfully sended</h4>
              <p className={s.contact_modal_info}>I'll get in touch as soon as possible</p>
              <h3 className={s.contact_modal_title}>Thank you!🚀</h3>
              <a className={`${s.contact_modal_button} button button_small`} onClick={handleCloseModal}>
                Close
                <TiTimes className='button_icon'/>
              </a>
            </div> 
          </dialog>
          
          {isLoading
          ?
          <Loader/>
          :""
         }
         
      </div>
    </section>
  )
}

export default Contactme