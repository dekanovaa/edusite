
import './Header.css'
import student from '../../assets/student.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import dars1 from '../../assets/dars1.mp4'
import dars2 from '../../assets/dars2.mp4'
import dars3 from '../../assets/dars3.mp4'


function Header() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
   
    
  }, []);
 

  return (
    <>
    <div className='header'>
      <div className='container header__container'>
        <div className='header__wrap'  >
          <h1 className='header__title'>
            Biz bilan <span className='header__span'>maqsadlar</span> aniq, <span className='header__span'>harakatlar</span> to'g'ri va <span className='header__span'>natija</span> kutilgandek bo'ladi
          </h1>
          <p className='header__text'>
          <i class="fa-solid fa-graduation-cap"></i>
          1000 dan ziyod abiturientlarni talabalikka kuzatganmiz
          </p>
          <Link to="/contact" className='header__link_btn'>Kursga yozilish</Link>
        </div>
        <img className='header__img' src={student} alt="" />
      </div>
    </div>
    <hr />
    <div className='section'>
      <div className='container section__container'>
        <h1 className='section__title' data-aos="zoom-in-down">Avfzalliklarimiz</h1>
        <ul className='section__list'>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-chalkboard-user"></i>
            <h3 className='section__name'>
              Professional ustozlardan sifatli ta'lim
            </h3>
          </li>
          <li className='section__item'data-aos="zoom-in" >
          <i class="fa-solid fa-book-open-reader"></i>
            <h3 className='section__name'>
              Har yakshanba qo'shimcha dars va test sinovlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-user-graduate"></i>
            <h3 className='section__name'>
              Har hafta kirish imtihonlari atmosferasida, tushish ehtimolligi yuqori bo'lgan testlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-award"></i>
            <h3 className='section__name'>
              Hamyonbob narxlar va kurs uchun grantlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
              Ahil jamoa va dars uchun qulay atmosfera
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
              Doimiy nazorat qo'llab quvvatlash
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div className='hero'>
      <div className='container hero__container'>
       <h1 className='hero__title'data-aos="zoom-in"  >
       Youtubdagi online darslarimiz
       </h1>
      <div className='hero__wrap'>
      <video className='hero__link' controls >
      <source src={dars1} type="video/mp4"/>
     </video>
     <video className='hero__link' controls >
      <source src={dars2} type="video/mp4"/>
     </video>
     <video className='hero__link' controls >
      <source src={dars3} type="video/mp4"/>
     </video>
      </div>
      <a className='hero__btn' href="#" data-aos="zoom-in" >Ko'proq ko'rish</a>
      </div>

    </div>
     
    </>
  )
}

export default Header
