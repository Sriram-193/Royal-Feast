import React, { useEffect, useRef, useState } from 'react'
import "./Testimonial.css"

const Testimonial = () => {
      
    var Reviews = [
        {
            name : "David Smith",
           review : "A delightful evening at Royal Feast. The ambiance was charming, the food exquisite. Attentive staff made it truly special"
    }, 
    {
        name : "Christopher Lee",
        review : "Highly recommend Royal Feast! Fantastic flavors, cozy atmosphere, impeccable service."
     },
     {
        name : "Matthew Taylor",
        review : "An unforgettable dining experience! Royal Feast exceeded expectations. We'll definitely be returning soon."
     }
       
    ]
    const [Review, setReview] = useState(Reviews)
    const [showForm, setForm] = useState(false)
    const [disabel, setDisable] = useState(false)
    const userName = useRef(null)
    const userRev = useRef(null)

    function addReview(){
        if (userName.current.value !== "" && userRev.current.value !== "") {
            Review.push({ name: userName.current.value, review: userRev.current.value });
            setReview([...Review]);
            setDisable(true)
        } else if(userName.current.value == "" || userRev.current.value == ""){
            alert("Enter both Name and Review ");
        }
          userName.current.value = ""
          userRev.current.value = ""
            setForm(!showForm)
       
    }


  return (
    <div className='review' id='reviews'>
        <h2>Share Your Exquisite Experiences</h2>
        <div  data-aos="zoom-in" className="review-desc">
        <p >
        Embark upon a culinary journey at our esteemed restaurant, where every dish is crafted to delight the discerning palate. Experience regal indulgence amidst gastronomic excellence and impeccable service. Share your cherished tale and become part of our culinary legacy, forever immortalizing your patronage within our gastronomic heritage.</p>
        </div>
       

        <div className="cards">
        {
            Review.map((element , key)=>{
               return <>
               <div className="card"  data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom">
                <h3><i class="fa-regular fa-user"></i> {element.name}</h3>
                <p>{element.review}</p>
            </div>
            </>
            })
        }
        </div>
    <div className='addBtn'>
    <button onClick={()=>{
        setForm(!showForm)
    }} disabled={disabel}  title='You can only add one review'>Add Yours</button>
        </div>

        <div className={`form ${showForm ? "showForm": ""} `}>
        <i class="fa-solid fa-xmark" onClick={()=>{
        setForm(!showForm)
    }}></i>
        <h3>Add you Review</h3>
            <input type="text" ref={userName} placeholder='Your Name'/>
            <input type="text" ref={userRev} placeholder='Your Review'/>
            <button onClick={addReview} >Submit</button>
        </div>
    </div>
  )
}

export default Testimonial