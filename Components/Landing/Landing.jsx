import React from 'react'
import Header from '../Header/Header';
import Hero from "../Hero/Hero"
import Residencies from "../Residencies/Residencies"
import Value from "../Value/Value";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";
import './Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
    <div className='App'>
      <div className="white-gradient" />
      
      <Hero />
    </div>
    <Residencies/>
    <Value />
    <GetStarted />
  </div>
  )
}

export default Landing
