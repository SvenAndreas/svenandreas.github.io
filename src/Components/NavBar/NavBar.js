import React, {useContext, useEffect, useState} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import s from './NavBar.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useDetectHover from '../../CustomHooks/useDetectHover';
import { hover } from '@testing-library/user-event/dist/hover';
import { LanguageContext } from '../../Contexts/languageContext';

function NavBar() {
  const [isActive,setIsActive] = useState(false)  
  const handleToggleMenu = ()=>{
   isActive ? setIsActive(!isActive) : setIsActive(!isActive)
  }
  const {hovered} = useDetectHover('prueba',0)
  const {language,setLanguage} = useContext(LanguageContext)
  return (
    <header className={s.nav}>
      <nav className={s.nav_container}>
      <div className={s.nav_header}>
        <a href='#about' className={s.nav_logo}>SVEN</a>
        <div id='prueba' className={s.nav_dropdown_container}>
          <KeyboardArrowDownIcon className={`${s.nav_dropdown_icon} ${hovered ?  s.nav_dropdown_icon_hovered : ''}`}/>
          <p>Idiomas</p>
          <p className={s.nav_dropdown_lang}>{language}</p>
          <ul className={`${s.nav_dropdown_menu} ${hovered ? s.nav_dropdown_menu_active :''}`}>
            <li onClick={()=>setLanguage('ES')} >
              <img className={s.nav_dropdown_img} src='https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg' alt='Bandera de españa' title='
RelShot 263, Echando una mano, Public domain, via Wikimedia Commons
' />
              <p>Español</p>
            </li>
            <li onClick={()=>setLanguage('EN')}>
              <img className={s.nav_dropdown_img} src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg' alt='Bandera inglaterra' title='Hoshie, Public domain, via Wikimedia Commons'/>
              <p>English</p>
            </li>
          </ul>
        </div>
      </div>

        <div className={`${s.nav_menu} ${isActive ? s.show_menu : ''}`} id='nav_menu'>
          <ul className={s.nav_ul}>
            <li>
              <a href='#home' className={s.nav_link} onClick={handleToggleMenu}>
                <HomeOutlinedIcon className={s.nav_icon}/>Home
              </a>
            </li>
            <li>
              <a href='#about' className={s.nav_link} onClick={handleToggleMenu}>
               <PersonOutlineOutlinedIcon className={s.nav_icon}/>About
              </a>
            </li>
            <li>
              <a href='#skills' className={s.nav_link} onClick={handleToggleMenu}>
               <ArticleOutlinedIcon className={s.nav_icon}/>Skills
              </a>
            </li>
            <li>
              <a href='#service' className={s.nav_link} onClick={handleToggleMenu}>
                <IntegrationInstructionsOutlinedIcon className={s.nav_icon}/>Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className={s.nav_link} onClick={handleToggleMenu}>
               <WorkOutlineOutlinedIcon className={s.nav_icon}/>Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className={s.nav_link} onClick={handleToggleMenu}>
                <SendOutlinedIcon className={s.nav_icon}/>Contact
              </a>
            </li>
          </ul>
          <CloseOutlinedIcon onClick={handleToggleMenu} className={s.nav_close}/>
        </div>
        <div>
          <div >
            <GridViewOutlinedIcon onClick={handleToggleMenu} className={s.nav_toggle}/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar