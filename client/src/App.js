import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/home/Home'
import Services from './components/pages/services/Services'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import Men from './components/pages/men/Men'
import Women from './components/pages/women/Women'


import React, {useEffect, useState} from "react"



function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Footer />
      </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/men" element={<Men />}/>
          <Route path="/women" element={<Women />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
