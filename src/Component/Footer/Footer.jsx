
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { t } from 'i18next';

function Footer() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
   
    
  }, []);
 

  return (
    <>
     <div className='footer'>
        <div className='container footer__container'>
            <ul className='footer__list'>
                <li className='footer__item_1' data-aos="zoom-in" >
                    <Link to="/" className='footer__link_logo'><img className='logo' src={logo} alt="" /></Link>
                    <p className='footer__logo'>{t('footer.text5')}</p>
                </li>
                <li className='footer__item' data-aos="zoom-in" >
                  <Link to="/" className='footer__link'>{t('navbar.link1')}</Link>
                <Link to="/about" className='footer__link'>{t('navbar.link2')}</Link>
                 <Link to="/new" className='footer__link'>{t('navbar.link3')}</Link>
                 <Link to="/course" className='footer__link'>{t('navbar.link4')}</Link>
                </li>
                <li className='footer__item' data-aos="zoom-in" >
                  <a className='footer__link' href=""><i class="fa-brands fa-telegram"></i>{t('footer.text1')}</a>
                  <a className='footer__link' href=""><i class="fa-brands fa-youtube"></i>{t('footer.text2')}</a>
                  <a className='footer__link' href=""><i class="fa-solid fa-location-dot"></i>{t('footer.text3')}</a>
                  <a className='footer__link' href="tel:+998994032842"><i class="fa-solid fa-phone"></i>{t('footer.text4')}</a>
                </li>

            </ul>

        </div>

     </div>
    </>
  )
}

export default Footer
