import React from 'react'
import Header from '../Header/Header';
import Hero from "../Hero/Hero"
import Residencies from "../Residencies/Residencies"
import Value from "../Value/Value";
import GetStarted from "../GetStarted/GetStarted";
import './Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3326899591696450"
     crossorigin="anonymous"></script>
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
