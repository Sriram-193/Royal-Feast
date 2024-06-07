import React from 'react'
import "./Footer.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Footer = () => {
  const [text] = useTypewriter({
    words: ['Feast', 'Dining'],
    loop: {},
  })
  const date = new Date().getFullYear();
  
  return (
    <footer id='contact'>
     <h1>Royal <span>{text}</span> <span><Cursor /></span>  </h1>
     
        <div className="footer-item">
       
        <div>
          <h2>Experience gourmet excellence, <br /> served to delight your senses.</h2>
        </div>

        <div>
        <h4>Contact Us </h4>
        <p>Help & Support</p>
        <p>Partner with us</p>
        <p>Ride with us</p>
        </div>
        <div>
        <h4>Company </h4>
        <p>About</p>
        <p>Carrers</p>
        <p>Team</p>
        </div>
        <div>
        <h4>Legal</h4>
        <p>Term & Conditions</p>
        <p>Cookie Policy</p>
        <p>Privacy Policy</p>
        </div>
        </div>
        <hr />
        <p className='copyrights'>Copyright © {date}. Royal Feast. All rights reserved.</p>
   
   <div className="backToTop">
   <a href="#nav"><i class="fa-solid fa-arrow-up"></i></a>
   </div>
        

    </footer>
  )
}

export default Footer