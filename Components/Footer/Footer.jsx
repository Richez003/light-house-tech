import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
<section className="f-wrapper">
  <div className="paddings innerWidth flexCenter f-container">
    <div className="flexColStart f-left">
      <span className="f-logo">
      <img src='./Logo1.png' alt='' width={120}/>
        <h3>LIGHT HOUSE TECHNOLOGIES</h3>
      </span>
   
    </div>
    <div className="flexColStart f-right">
      <div className="f-menu flexStart">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>BLOG</span>
        </div>
    </div>
  </div>
    
</section>
  )
}

export default Footer
