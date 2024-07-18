
import './Header.css'
import student from '../../assets/student.png'
import haqida from '../../assets/haqida.webp'
import { Link } from 'react-router-dom'

function Header() {
 

  return (
    <>
    <div className='header'>
      <div className='container header__container'>
        <div className='header__wrap'>
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
        <h1 className='section__title' data-aos="zoom-in-down"  data-aos-duration="3000">Avfzalliklarimiz</h1>
        <ul className='section__list'>
          <li className='section__item' data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-chalkboard-user"></i>
            <h3 className='section__name'>
              Professional ustozlardan sifatli ta'lim
            </h3>
          </li>
          <li className='section__item'data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-book-open-reader"></i>
            <h3 className='section__name'>
              Har yakshanba qo'shimcha dars va test sinovlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-user-graduate"></i>
            <h3 className='section__name'>
              Har hafta kirish imtihonlari atmosferasida, tushish ehtimolligi yuqori bo'lgan testlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-award"></i>
            <h3 className='section__name'>
              Hamyonbob narxlar va kurs uchun grantlar
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
              Ahil jamoa va dars uchun qulay atmosfera
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in"  data-aos-duration="3000">
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
              malumot qo'shish kerak
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div className='hero'>
      <div className='container hero__container'>
       <h1 className='hero__title'data-aos="zoom-in"  data-aos-duration="3000" >
       Youtubdagi online darslarimiz
       </h1>
      <div className='hero__wrap'>
        <a className='hero__link' href="" data-aos="zoom-in"  data-aos-duration="3000">

        </a>
        <a className='hero__link' href="" data-aos="zoom-in"  data-aos-duration="3000">
          
          </a>
          <a className='hero__link' href=""data-aos="zoom-in"  data-aos-duration="3000">
          
          </a>
      </div>
      <a className='hero__btn' href="#" data-aos="zoom-in"  data-aos-duration="3000">Ko'proq ko'rish</a>
      </div>

    </div>
     
    </>
  )
}

export default Header
