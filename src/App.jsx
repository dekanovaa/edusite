
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import New from './Pages/New/New'
import Course from './Pages/Course/Course'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
   
    
  }, []);
 

  return (
    <>
      <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
  </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/course" element={<Course/>}/>

    </Routes>
     
    </>
  )
}

export default App
