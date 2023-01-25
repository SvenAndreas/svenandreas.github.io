import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const Nav = styled.nav`
  /* max-width:968px; */
  max-width:768px;
  margin-left:var(--m-1-5);
  margin-right:var(--m-1-5);
  height: 3rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Ul = styled.ul`
  display:grid;
  gap:2rem;
  grid-template-columns:repeat(3,1fr);
`;

const Header = styled.header`
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
  z-index:1000;
  background-color:var(--body-color);
`;

function NavBar() {
  const handleToggleMenu = (e)=>{
   const menu = document.getElementById('nav_menu');
   if(menu.classList.length === 1) menu.classList.add('show_menu')
   else menu.classList.remove('show_menu')
  }
  return (
    <Header>
      <Nav>
        <a href='#' className='nav_logo'>SAC</a>

        <div className='nav_menu' id='nav_menu'>
          <Ul classNamme='nav_list'>
            <li>
              <a href='#home' className='nav_link' onClick={handleToggleMenu}>
                <HomeOutlinedIcon className='nav_icon'/>Home
              </a>
            </li>
            <li>
              <a href='#about' className='nav_link' onClick={handleToggleMenu}>
               <PersonOutlineOutlinedIcon className='nav_icon'/>About
              </a>
            </li>
            <li>
              <a href='#skills' className='nav_link' onClick={handleToggleMenu}>
               <ArticleOutlinedIcon className='nav_icon'/>Skills
              </a>
            </li>
            <li>
              <a href='#services' className='nav_link' onClick={handleToggleMenu}>
                <IntegrationInstructionsOutlinedIcon className='nav_icon'/>Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='nav_link' onClick={handleToggleMenu}>
               <WorkOutlineOutlinedIcon className='nav_icon'/>Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className='nav_link' onClick={handleToggleMenu}>
                <SendOutlinedIcon className='nav_icon'/>Contact
              </a>
            </li>
          </Ul>
          <CloseOutlinedIcon onClick={handleToggleMenu} className='nav_close'/>
        </div>
        <div>
          <div >
            <GridViewOutlinedIcon onClick={handleToggleMenu} className='nav_toggle'/>
          </div>
        </div>
      </Nav>
    </Header>
  )
}

export default NavBar