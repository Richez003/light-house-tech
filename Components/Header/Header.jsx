import OutsideClickHandler from "react-outside-click-handler"
import React, {useState} from 'react'
import {BiMenuAltRight} from "react-icons/bi"
import './Header.css'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800)
    {
return {right: !menuOpen && "-100%"}

    }
  }
  return (
   <section className="innerWidth h-wrapper">
<div className=" flexCenter innerWidth h-container">
    <span className='logo'>
    <img src="./Logo1.png" alt="logo" width={100}/>
    <h2>L. H. T.</h2>
    </span>
    <OutsideClickHandler
    onOutsideClick={()=>{
      setMenuOpen(false)
    }}
    >
    <div className=" flexCenter h-menu" 
    style={getMenuStyles(menuOpen)}
    >
        <a href="/">Home</a>
        <a href="#about">Our Value</a>
        <a href="#residencies">Blog</a>
        <a href="#getStart">Contact </a>
    </div>
    </OutsideClickHandler>
    
    <div className="menu-icon" onClick={()=>setMenuOpen((prev)=>!prev)}>
  <BiMenuAltRight size={30}/>
</div>
</div>

   </section>
  )
}

export default Header
