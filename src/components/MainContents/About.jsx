import React, { useEffect } from 'react'
import "./About.css"
import AOS from 'aos'
import "aos/dist/aos.css"
const About = () => {
  useEffect(()=>{
    AOS.init({duration: 1000, once:true})
  }, [])
  return (
    <>
    <div className='about' id='about'>

    <h2 >Our Story</h2>
           <div className="paras">
        <p data-aos="fade-right">Welcome to Royal Feast, your culinary haven. Led by our Chef, we blend nostalgia with innovation for a memorable dining experience.</p>

        <p data-aos="fade-right">Discover a menu of seasonal delights – vibrant salads, fresh seafood, succulent meats, and house-made pastas. Pair with wines from our cellar or expertly crafted cocktails.</p>
        
        <p data-aos="fade-right">In our charming space, enjoy intimate dinners, lively gatherings, or leisurely brunches.</p>
        
        <p data-aos="fade-right">Indulge in the flavors of Royal Feast, where every dish tells a story of culinary craftsmanship and dedication to excellence.</p>
        
        <p data-aos="fade-right">Experience unparalleled hospitality as our attentive staff caters to your every need, ensuring a dining experience that is both delightful and memorable.</p>
        
        <p data-aos="fade-right">Whether you're celebrating a special occasion, hosting a private event, or simply craving a delicious meal, Royal Feast is the perfect destination for discerning diners.</p>
        
        <p data-aos="fade-right">Join us and savor the essence of culinary artistry. We can't wait to welcome you to Royal Feast.</p>
        
        <p data-aos="fade-right">Bon Appétit!</p>
          </div>
    </div>

    <div className="menu" id='categories'>
      <h2>Category</h2>
      <p className='menu-desc'>Begin your journey with appetizers light, <br />
        Small bites of joy to spark delight. <br />
        Then journey forth to main courses grand, <br />
        Where hearty entrees await at hand.
      </p>
        <div className="menu-slot">
            <a data-aos="fade-right" href='#appetizers'>Appetizers</a>
            <a data-aos="zoom-in" href='#main'>Main Courses</a>
            <a data-aos="fade-left" href='#desert'>Desserts</a>
        </div>

        <div className="menu-item" id='appetizers'>
          <img data-aos="fade-right" src="https://img.freepik.com/free-photo/fried-fish-with-cream-vegetables_140725-2091.jpg?t=st=1709472234~exp=1709475834~hmac=ce580d2c52f4c60d8340f6cd965891e16f8b09349f9ef76de15a21a66dac9ac2&w=740" alt="" />
         
         <div  data-aos="fade-left" className='menu-item-text'>
         <h2>Appetizers</h2>
          <p>Savor the symphony of tastes and textures, <br/>
           As each bite ignites the senses, <br/>
           From crispy delights to savory morsels,<br/>
           These small plates promise joy untold.<br/>
           </p>
         </div>
        </div>

        <div className="menu-item" id='main'>

        <img className='img-block'  data-aos="fade-left" src="https://img.freepik.com/free-photo/side-view-beef-salad-with-vegetables-parmesan-cheese-plate-with-red-wine-table_140725-11478.jpg?t=st=1709473490~exp=1709477090~hmac=d8115876db28338226c2ed51a1208bc14b86dc45f1c6125e919fd8be5d66d9b4&w=360" alt="" />
        
         <div className='menu-item-text nores-text'  data-aos="fade-right">
         <h2>Main Course</h2>
          <p>In the heart of the meal's grand tableau,<br/>
Where flavors mingle and stories unfold,<br/>
From tender meats to rich sauces divine,<br/>
Each forkful whispers promises sublime.<br/>
           </p>
         </div>

         <img className='img-none'  data-aos="fade-left" src="https://img.freepik.com/free-photo/side-view-beef-salad-with-vegetables-parmesan-cheese-plate-with-red-wine-table_140725-11478.jpg?t=st=1709473490~exp=1709477090~hmac=d8115876db28338226c2ed51a1208bc14b86dc45f1c6125e919fd8be5d66d9b4&w=360" alt="" />
        
         
        </div>

        <div className="menu-item" id='desert'>
          <img  data-aos="fade-right" src="https://img.freepik.com/free-photo/portioned-cheesecake-topped-with-berries-jam_140725-5056.jpg?t=st=1709473758~exp=1709477358~hmac=3a378133e27ff074f88f93aeb05de9f59ce6941b2eba98ac69baabfedacfbb83&w=740" alt="" />
         
         <div className='menu-item-text'  data-aos="fade-left">
         <h2>Dessert</h2>
          <p>Amidst the final act, a sweet crescendo,<br/>
Where indulgence reigns, and cravings echo,<br/>
From velvety creams to fruits ripe and bold,<br/>
Each spoonful sings tales of bliss untold.<br/>
           </p>
         </div>
        </div>
        
     </div>
      
    </>
  )
}

export default About