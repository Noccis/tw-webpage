import React from 'react'
import '../styles/home.css'
import portrait from "../assets/profileColor1.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
  const [typedWords] = useTypewriter({
    words: ['Och jag är en kreativ utvecklare.',]
  })

  return (
    <div id="home-container">
      <div id="home-text">
        <p className="data-styled-text">Hej jag heter</p>
        <h1>Toni Wincent</h1>
        <div id='typewriter-container'>
          <p className="grey-text">
            {typedWords}
          </p>
          <Cursor cursorColor='white' />
        </div>
        
        <ul id="contact-info">
          <li>
            <p><a href="https://www.linkedin.com/in/toni-lof/" target="_blank"><FaLinkedin size={30} /></a></p>
          </li>
          <li>
            <p><a href="https://github.com/Noccis" target="_blank"><FaGithub size={30} /></a></p>
          </li>
          <li>
            <p><a href="mailto:toniwincent83@gmail.com"><IoIosMail size={30} /></a></p>
          </li>
        </ul>
      </div>
      <img src={portrait} id="portrait" />
    </div>
  )
}

export default Home