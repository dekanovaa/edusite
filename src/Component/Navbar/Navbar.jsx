
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
import Modal from '../Modal/Modal'

function Navbar() {
 

  return (
    <>
    <div className='navbar'>
      <div className='container navbar__container'>
        <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        <nav className='navbar__nav'>
          <Link to="/" className='navbar__link'>Asosiy sahifa</Link>
          <Link to="/about" className='navbar__link'>Biz haqimizda</Link>
          <Link to="/new" className='navbar__link'>Yangiliklar</Link>
          <Link to="/course" className='navbar__link'>Kurslar</Link>
        </nav>
        <Link to="/contact" className='navbar__link_btn'>Kursga yozilish</Link>
        <Modal/>
      </div>
    </div>
     
    </>
  )
}

export default Navbar
