import React from 'react'
import s from './Portfolio.module.css'
import henry from '../../Assets/henrygadget.gif'
import project from '../../Assets/urbantech.png'
import comming from '../../Assets/commingsoon.png';
import ecowe from '../../Assets/ecowe.png'
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
       spaceBetween={15}
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
        {/* <SwiperSlide>
          <div className={`${s.portfolio_content} grid`}>
            <img src={henry} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>E-commerce web App</h3>
              <p className={s.portfolio_description}>This marked my inaugural project and remains a work in progress. Created during Henry's bootcamp, I collaborated with a team of fellow students to construct it from the ground up. With just one month at our disposal, we embraced agile methodologies, utilizing tools like Trello to orchestrate tasks and engaging in daily meetings to synchronize and exchange updates.
              I contributed to both the backend and frontend aspects of the project. </p>
                <a href='https://pf-henrygadget.onrender.com/' target='_blank' rel='noreferrer' className='button button_small'>
                  Demo
                  <BsArrowRightShort className='button_icon'/>
                </a>
            </div>
          </div>
        </SwiperSlide> */}
         <SwiperSlide>
         <div className={`${s.portfolio_content} grid`}>
            <img src={project} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>Urbantech</h3>
              <p className={s.portfolio_description}>This project is for the Urbantech technology store. It features a cellphone repair budget calculator, tailored to the model, brand, and specific issue the device is facing. I was responsible for the complete development of the app, from the database architecture to the UX/UI design.
              This app is currently in its 1.0.0 version. The project itself is considerably expansive, with numerous additional functionalities currently in the process of being developed.</p>
              <a href='https://www.urbantechcba.com.ar//' target='_blank' rel='noreferrer' className='button button_small'>
                  Demo
                  <BsArrowRightShort className='button_icon'/>
                </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className={`${s.portfolio_content} grid`}>
            <img src={ecowe} alt='porfolioPicture' className={s.portfolio_img}/>
            <div className={s.portfolio_data}>
              <h3 className={s.portfolio_title}>Ecowe</h3>
              <p className={s.portfolio_description}>It's currently in development – a mobile application tailored for both Android and iOS platforms. The technologies I'm employing include React Native for the frontend and Firebase as the backend service. I hold the responsibility for the entire application development process.
              The app boasts geolocation functionality, enabling the arrangement of services provided by app users based on their geographic location. It offers features like QR code generation and reading, user-to-user transactions, recent activity tracking, profile and service editing capabilities, and a multitude of other functionalities.
              </p>
               <a href='https://ecowe.vercel.app' target='_blank' rel='noreferrer' className='button button_small'>
                  Demo
                  <BsArrowRightShort className='button_icon'/>
                </a> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${s.portfolio_content} grid`}>
            <img src={comming} alt='porfolioPicture' className={s.portfolio_img}/>
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
        <div className={`swiper-button-prev`}>
          <FiChevronLeft className={s.swiper_button_prev} />
        </div>
      </Swiper>
      </div>
    </section>
  )
}

export default Portfolio