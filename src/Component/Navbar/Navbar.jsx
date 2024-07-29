
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
import Modal from '../Modal/Modal'
import { useTranslation } from 'react-i18next';

function Navbar() {
 
  const {t,i18n} = useTranslation();
  const languages = localStorage.getItem('i18nextLng')
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage)
  }
  return (
    <>
    <div className='navbar'>
      <div className='container navbar__container'>
        <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        <nav className='navbar__nav'>
          <Link to="/" className='navbar__link'>{t('navbar.link1')}</Link>
          <Link to="/about" className='navbar__link'>{t('navbar.link2')}</Link>
          <Link to="/new" className='navbar__link'>{t('navbar.link3')}</Link>
          <Link to="/course" className='navbar__link'>{t('navbar.link4')}</Link>
        </nav>
        <Link to="/contact" className='navbar__link_btn'>{t('navbar.btn')}</Link>
      <Modal/>
      <select id='lang' onChange={handleChange} value={languages}>
        <option id='uz' value="uz">UZ</option>
        <option id='en' value="en">EN</option>
        <option id='ru' value="ru">RU</option>
      </select>
      </div>
    </div>
     
    </>
  )
}

export default Navbar
