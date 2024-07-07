
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/new" element={<New/>}/>
      <Route path="/course" element={<Course/>}/> */}

    </Routes>
     
    </>
  )
}

export default App
