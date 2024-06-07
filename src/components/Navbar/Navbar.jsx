import React, { useState } from 'react'
import "./Navbar.css"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className='nav' id='nav'>
        <div className="logo">
            <h1> Royal Feast</h1>
        </div>

        <div className="nav-items">
            <a href="#nav">Home</a>
            <a href="#about">About Us</a>
            <a href="#categories">Categories</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact Us</a>
        </div>
           <div className="menu-bar" onClick={()=>{setIsOpen(!isOpen)}}>
             <i class="fa-solid fa-bars"  ></i>
           </div>
    </div>

    <div className={`side-nav ${isOpen? 'open': ""}`}>
     <i class="fa-solid fa-xmark"  onClick={()=>{setIsOpen(!isOpen)}} ></i>
      <p><a href="#nav" onClick={()=>{setIsOpen(!isOpen)}}>Home</a></p>
      <p><a href="#about"     onClick={()=>{setIsOpen(!isOpen)}}>About Us</a></p>
      <p><a href="#categories" onClick={()=>{setIsOpen(!isOpen)}}>Categories</a></p>
      <p><a href="#reviews"   onClick={()=>{setIsOpen(!isOpen)}}>Reviews</a></p>
      <p><a href="#contact"   onClick={()=>{setIsOpen(!isOpen)}}>Contact Us</a></p>
    </div>

    </>
  )
}

export default Navbar