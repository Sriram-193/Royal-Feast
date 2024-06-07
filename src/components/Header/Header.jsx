import React, { useEffect, useRef, useState } from 'react'
import "../Header/Header.css"
const Header = () => {
  
  const emailRef = useRef(null)
  const [Focus,setFocus] = useState(false)
  const [isValidUser,setValidUser] = useState(null)
  function getEmail() {
    const email = emailRef.current.value;
    const isValidFormat = /\S+@gmail\.com$/.test(email);
    if (isValidFormat) {
      setValidUser(true)
    } else {
      setValidUser(false)
    }
  }
  function closeValid(){
    setValidUser(null)
  }
  function addFocus(){
    setFocus(true)
  }
   useEffect(() => {
    function handleClickOutside(event) {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        if (emailRef.current.value.trim() === '') {
          setFocus(false);
        }
      }
    }

    document.body.addEventListener('click', handleClickOutside);

  
  }, []);
  return (
   <>
     <div className='header' id='header'>

     <div className='header-log'>
     
     <h1>Welcome to Roya Feast </h1>

<div className='align-line'>
  
     <div className="input-container">
     <input type="text" id='email' className={ Focus ? "focus" : ""} onClick={()=>{
      addFocus()
     }} name="email" ref={emailRef}  required />

     <span>Email</span>
    
     </div>

     <i className='fa-solid fa-arrow-right' onClick={()=>{
      getEmail()
     }}></i>

</div>
     </div>
   
  </div>

<div className="aligncenter">

<div data-aos="zoom-in" className="welcome" style={{ transform: isValidUser ? "scale(1)" : "scale(0)"}}>
  <img src="https://cdn-icons-png.flaticon.com/128/9426/9426997.png" alt="" />
     <h2>Sucess</h2>
     <p>{emailRef.current ? emailRef.current.value : ""}</p>
    <p>Thank you, we'll get back to you later!</p>
    <button onClick={()=>{
      closeValid()
    }}>OK</button>
  </div>

  <div data-aos="zoom-in" className="noWelcome" style={{transform : isValidUser==null||isValidUser  ? "scale(0)" : "scale(1)" }}>
  <img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="" />
     <h2>Error</h2>
    <p>Invalid Email address</p>
    <button onClick={()=>{
      closeValid()
    }}>OK</button>
  </div>

</div>
 
   </>
  )
}

export default Header