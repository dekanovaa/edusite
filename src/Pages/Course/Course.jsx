
import './Course.css'
import  Navbar from'../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import math from '../../assets/math1.jpg'
import fizika from '../../assets/fizika.jpg'
import fizika1 from '../../assets/fizika1.jpg'
import math2 from '../../assets/math2.jpg'
import math1 from '../../assets/math4.webp'
import { Link } from 'react-router-dom'
import { t } from 'i18next'

function Course() {
 

  return (
    <>
    <Navbar/>
    <div className='cours'>
      <div className='container cours__container'>
        <h1 className='cours__title' data-aos="zoom-in-down">{t('kurs.name')}<i class="fa-solid fa-arrow-down"></i></h1>
        <ul className='cours__list'>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math} alt="math" />
            <h2 className='cours__name'>
              {t('kurs.text1')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')}<span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math2} alt="math" />
            <h2 className='cours__name'>
             {t('kurs.text2')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={fizika} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text3')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')}<span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math1} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text4')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')}<span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={fizika1} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text5')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
        </ul>
        <Link to="/contact" className='header__link_btn'>{t('navbar.btn')}</Link>

      </div>

    </div>
    <Footer/>
     
    </>
  )
}

export default Course
