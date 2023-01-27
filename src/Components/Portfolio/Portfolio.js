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



function Portfolio() {
  return (
    <section className={`${s.portfolio} section`}>
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
              <h3 className={s.portfolio_title}>E-commerce web app</h3>
              <p className={s.portfolio_description}>A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
                <a href='#' target='_blank' className='button button_small'>
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
              <h3 className={s.portfolio_title}>CRUD SPA</h3>
              <p className={s.portfolio_description}>A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
              <a href='#' target='_blank' className={`${s.portfolio_button} button_small button`}>
                Demo
                <BsArrowRightShort className={`${s.portfolio_button_icon} button_icon `}/>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>E-commerce web app</h3>
              <p className={s.portfolio_description}> A single page applicaction made with react , express, postgresSQL, blabla..blabablabla.. etectec</p>
              <a href='#' target='_blank' className={`${s.portfolio_button} button_small button`}>
                Demo
                <BsArrowRightShort className={`${s.portfolio_button_icon} button_icon `}/>
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