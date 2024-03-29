import React from 'react'
import './GetStarted.css'
import { HiOutlineMail } from "react-icons/hi";
// import { FaPhoneVolume } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
const GetStarted = () => {
  return (
  <section className="g-wrapper"
  id="getStart">
    <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started With Light House Technologies</span>
            <span className='secondaryText'>Speak with Us if you have any questions</span>
            <div className="button">
              Get Started
            </div>
            <div className="social-icon">
            <a href='mailto: richardfriday003@gmail.com'> <HiOutlineMail size={40}/></a>
            <a href='tel: +2348148241977'> <MdCall size={40} /></a>
            <a href={`https://www.facebook.com/michael.friday.5030927?mibextid=ZbWKwL`}> <BsFacebook size={40} /></a>
            </div>
           
        </div>
    </div>
  </section>
  )
}

export default GetStarted
