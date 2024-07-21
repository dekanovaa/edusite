
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import './New.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slide1 from '../../assets/img44.jpg'
import slide2 from '../../assets/img5.jpg'
import slide3 from '../../assets/img6.jpg'
import slide4 from '../../assets/img7.jpg'
import slide5 from '../../assets/img8.jpg'
import slide6 from '../../assets/img9.jpg'
import slide7 from '../../assets/img10.jpg'
import slide8 from '../../assets/img14.jpg'
import slide9 from '../../assets/img15.jpg'
import slide10 from '../../assets/img16.jpg'
import slide11 from '../../assets/img17.jpg'
import slide12 from '../../assets/img18.jpg'
import slide13 from '../../assets/m1.jpg'
import slide14 from '../../assets/m2.jpg'
import slide15 from '../../assets/m3.jpg'
import slide16 from '../../assets/m4.jpg'

function New() {
 

  return (
    <>
    <Navbar/>
    <div className='new'>
      <div className='container new__container'>
        <h1 className='new__title'>
          Bitiruvchilarimizning natijalari
          <i class="fa-solid fa-arrow-down"></i>
        </h1>
       <div className='slider' data-aos="zoom-in-down">
       <Swiper
        spaceBetween={15}
        slidesPerView={3}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          820: {
            slidesPerView: 3,
            spaceBetween: 20,

          },
          720: {
            slidesPerView: 2,
            spaceBetween: 20,

          },
          620: {
            slidesPerView: 2,
            spaceBetween: 20,

          },
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          }

      }}
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide12} alt="" /></SwiperSlide>
        
      </Swiper>

       </div>
       <h1 className='new__title' data-aos="zoom-in-down">
        Milliy sertifikat imtihonini topshirgan o'quvchilarimiz natijalari
        <i class="fa-solid fa-arrow-down"></i>

       </h1>
      <div className='subslide' data-aos="zoom-in-down">
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
         breakpoints={{
            820: {
              slidesPerView: 2,
              spaceBetween: 20,
  
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 20,
  
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 20,
  
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            }
  
        }}
      >
        <SwiperSlide><img src={slide13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide15} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide16} alt="" /></SwiperSlide>
        
      </Swiper>
      </div>


      </div>

    </div>
    <Footer/>
     
    </>
  )
}

export default New
