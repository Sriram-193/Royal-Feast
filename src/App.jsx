import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/MainContents/About'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div className="bg">
    <Navbar />
    <Header />
    </div>
   
    <About />
    <Testimonial />
    <Footer />
    </>
  )
}

export default App
