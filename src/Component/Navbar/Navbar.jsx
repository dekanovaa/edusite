
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
 

  return (
    <>
    <div className='navbar'>
      <div className='container navbar__container'>
        <Link to="/" className='navbar__link_logo'>A <sup>+</sup></Link>
        <nav className='navbar__nav'>
          <Link to="/about" className='navbar__link'>Biz haqimizda</Link>
          <Link to="/new" className='navbar__link'>Yangiliklar</Link>
          <Link to="/course" className='navbar__link'>Kurslar</Link>
        </nav>
        <Link to="/contact" className='navbar__link_btn'>Kursga yozilish</Link>
      </div>
    </div>
     
    </>
  )
}

export default Navbar
