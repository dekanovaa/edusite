
import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import teacher from '../../assets/teacher.jpg'
import exam from '../../assets/exam.webp'
import a2 from '../../assets/a2.jpg'
import a3 from '../../assets/a3.jpg'
import a4 from '../../assets/a4.jpg'
import a5 from '../../assets/a5.jpg'
import a6 from '../../assets/a6.jpg'
import biz1 from '../../assets/biz1.jpg'
import biz2 from '../../assets/biz2.jpg'
import biz3 from '../../assets/biz3.jpg'
import biz4 from '../../assets/biz4.jpg'
import biz5 from '../../assets/biz5.jpg'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import { Autoplay,Thumbs, Navigation } from 'swiper/modules';


function About() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 

  return (
    <>
    <Navbar/>
    <div className='about'>
      <div className='container about__container'>
      <h1 className='about__title'>Biz haqimizda</h1>
          <div className='about__wrap'>
          <div className='about__wrapper' data-aos="zoom-in-down">
          <i class="fa-solid fa-check"></i>
          <h3 className='about__name'>
         
            Bizning o'qituvchimiz va rahbarimiz ko'p yillik tajribaga ega matematik
            </h3>
            <a href={teacher}><img className='about__img' src={teacher} alt="" /></a>
            </div>
           <div className='about__wrapper' data-aos="zoom-in-down">
           <i class="fa-solid fa-check"></i>
           <h3 className='about__name'>
           Jamoamiz uzoq yillardan buyon abiturientlarni matematika va fizika fanlaridan kirish imtihonlariga tayyorlaydi va bugungacha yaxshi natijalarni ko'rsatib kelmoqda.</h3>
           <img className='about__img' src={exam} alt="" />
           </div>
           <div className='about__wrapper' data-aos="zoom-in-down">
           <i class="fa-solid fa-check"></i>
           <h3 className='about__name' >
           Bizda abiturientlar muddatdan oldin blok test topshirib o'z potensiallarini baholay olishadi
           </h3>
          <div className='about__slide' data-aos="zoom-in-down">
          <Swiper
   id='about__swiper'
   slidesPerView={3}
        spaceBetween={30}
        navigation={false}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay, Thumbs,Navigation]}
 >
 
   <SwiperSlide><img src={a2} alt="" /></SwiperSlide>
   <SwiperSlide><img src={a3} alt="" /></SwiperSlide>
   <SwiperSlide><img src={a4} alt="" /></SwiperSlide>
   <SwiperSlide><img src={a5} alt="" /></SwiperSlide>
   <SwiperSlide><img src={a6} alt="" /></SwiperSlide>
 </Swiper>
          </div>
           </div>
           <h3 className='about__subtitle' data-aos="zoom-in-down">
             Ahil jamoamiz bilan imtihonlardan keyingi hordiqlar <i class="fa-solid fa-face-smile"></i>
           </h3>
           <div className='about__box' data-aos="zoom-in-down">
            <img className='about__image' src={biz1} alt="img1" />
            <img className='about__image' src={biz2} alt="img1" />
            <img className='about__image' src={biz3} alt="img1" />
            <img className='about__image' src={biz4} alt="img1" />
            <img className='about__image' src={biz5} alt="img1" />


           </div>
          </div>
      </div>

    </div>
    <Footer/>
     
    </>
  )
}

export default About
