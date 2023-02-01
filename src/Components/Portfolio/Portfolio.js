import React from 'react'
import s from './Portfolio.module.css'
import henry from '../../Assets/henrygadget.gif'
import { BsArrowRightShort } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineSend } from 'react-icons/ai'



function Portfolio() {
  return (
    <section className={`${s.portfolio} section`} id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <span className='section_subtitle'>Works</span>
      <div className={`${s.portfolio_container} container`}>
        
      <Swiper
       slidesPerView={1}
       spaceBetween={30}
       slidesPerGroup={1}
       fadeEffect={true}
       loop={true}
       loopFillGroupWithBlank={true}
       pagination={{
         clickable: true
       }}
       navigation={{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev'
       }}
       modules={[Pagination, Navigation]}
       className="mySwiper"
       
      >
         <SwiperSlide>
         <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>CRUD SPA</h3>
              <p className={s.portfolio_description}>This is my first project, is a web application developed for Henry's Bootcamp using pure CSS, React, PostgreSQL, Sequelize, and Express. The app retrieves data from the Spoonacular API and presents it in card format with a pagination. Users can filter the data using filters or the search bar, and can also create, update, and delete their own custom recipes</p>
              <a href='#' target='_blank' rel='noreferrer' className='button button_small'>
                  Demo
                  <BsArrowRightShort className='button_icon'/>
                </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>E-commerce web App</h3>
              <p className={s.portfolio_description}>This my second project is still in progress and involves several key features, including route protection, a relational database, user and admin panels, a shopping cart with a payment gateway, a newsletter system, a calendar system for scheduling dates between different branches, and third-party authentication.</p>
                <a href='https://pf-henrygadget.onrender.com/' target='_blank' rel='noreferrer' className='button button_small'>
                  Demo
                  <BsArrowRightShort className='button_icon'/>
                </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>Coming soon...</h3>
              <p className={s.portfolio_description}> Your project 😎</p>
              <a href='#contact' className={`${s.portfolio_button} button_small button`}>
                Contact Me
                <AiOutlineSend className={`${s.portfolio_button_icon} button_icon `}/>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className={`swiper-button-next`}>
          <FiChevronRight className={s.swiper_button_next}></FiChevronRight>
        </div>
        <div className='swiper-button-prev'>
          <FiChevronLeft className={s.swiper_button_prev} />
        </div>
      </Swiper>
      </div>
    </section>
  )
}

export default Portfolio