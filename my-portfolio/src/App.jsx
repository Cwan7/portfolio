import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './components/Home';
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

import './App.css'

function App() {
  

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer />
    </Router>
  )
}

export default App
