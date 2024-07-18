
import './Contact.css'
import logo from '../../assets/logo.jpg'

function Contact() {
 

  return (
    <>
    <div className='contact'>
        <div className='container contact__container'>
            <form className='contact__form'>
            <img src={logo} alt="logo" className='logo'/><br />
            <h1 className='contact__title'>Kursga yozilish</h1><br />
                <input type="text" id='name' placeholder='Ism'/><br />
                <input type="text" id='surname' placeholder='Familiya' /><br />
                <input type="text" id='tel' placeholder='+998' /><br />
                <select id="kurs">
                    <option value="">Kursni tanlang</option>
                    <option value="math">Asosiy matematika</option>
                    <option value="fizika">Fizika</option>
                    <option value="math">Milliy sertifikat(matematika)</option>
                    <option value="fiziak">Milliy sertifikat(fizika)</option>
                </select><br />
                <select id="day">
                    <option value="">O'zingizga qulay kunlarni tanlang</option>
                    <option value="juft">Juft kunlari</option>
                    <option value="toq">Toq kunlari</option>
                </select><br />
                <button className='contact__btn'>Jo'natish</button>
            </form>
        </div>

    </div>
     
    </>
  )
}

export default Contact
