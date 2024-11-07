import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/menu.css'

const Menu = () => {
  return (
    <div id='menu'>       
        <NavLink to="/">Hem</NavLink>               
        <NavLink to="/about">Om mig</NavLink>      
        <NavLink to="/portfolio">Portfolio</NavLink>         
    </div>
  )
}

export default Menu