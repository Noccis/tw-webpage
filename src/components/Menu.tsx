import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/menu.css'

const Menu = () => {
  return (
    <div id='menu'>       
        <NavLink to="/">Home</NavLink>               
        <NavLink to="/about">About</NavLink>      
        <NavLink to="/portfolio">Portfolio</NavLink>      
        <NavLink to="/art">Art</NavLink>       
    </div>
  )
}

export default Menu