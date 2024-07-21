
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Footer() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
   
    
  }, []);
 

  return (
    <>
     <div className='footer'>
        <div className='container footer__container'>
            <ul className='footer__list'>
                <li className='footer__item' data-aos="zoom-in" >
                    <Link to="/" className='footer__link_logo'><img className='logo' src={logo} alt="" /></Link>
                    <p className='footer__logo'>MATEMATIKAGA IQTISOSLASHGAN O'QUV MARKAZI</p>
                </li>
                <li className='footer__item' data-aos="zoom-in" >
                  <Link to="/" className='footer__link'>Asosiy sahifa</Link>
                <Link to="/about" className='footer__link'>Biz haqimizda</Link>
                 <Link to="/new" className='footer__link'>Yangiliklar</Link>
                 <Link to="/course" className='footer__link'>Kurslar</Link>
                </li>
                <li className='footer__item' data-aos="zoom-in" >
                  <a className='footer__link' href=""><i class="fa-brands fa-telegram"></i>Telegram guruhimiz</a>
                  <a className='footer__link' href=""><i class="fa-brands fa-youtube"></i>Yutubdagi darslarimiz</a>
                  <a className='footer__link' href=""><i class="fa-solid fa-location-dot"></i>Bizning manzilimiz</a>
                  <a className='footer__link' href="tel:+998994032842"><i class="fa-solid fa-phone"></i>Biz bilan bog'laning</a>
                </li>

            </ul>

        </div>

     </div>
    </>
  )
}

export default Footer
