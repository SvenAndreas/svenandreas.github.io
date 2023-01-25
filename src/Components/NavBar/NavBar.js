import React, {useState} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import s from './NavBar.module.css'


function NavBar() {
  const [isActive,setIsActive] = useState(false)

  const handleToggleMenu = ()=>{
   isActive ? setIsActive(!isActive) : setIsActive(!isActive)
  }
  return (
    <header className={s.header_container}>
      <nav className={s.nav_container}>
        <a href='#' className={s.nav_logo}>SAC</a>

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
              <a href='#services' className={s.nav_link} onClick={handleToggleMenu}>
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