
import './Header.css'
import header from '../../assets/header.jpg'
import student from '../../assets/student.png'
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
    <div className='section'>
      <div className='container section__container'>
        
      </div> 

    </div>
     
    </>
  )
}

export default Header
