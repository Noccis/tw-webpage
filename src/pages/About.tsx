import React from 'react'
import '../styles/about.css'
import toni from '../assets/me1.jpg'
import leon from '../assets/leon1.jpg'

const About = () => {
  return (
    <div id='about-container'>
      
      <div className='about-section'>
        <img src= {toni}/>
        <div className='section-text'>
          <h3>Det är jag som är Toni.</h3>
          <p>Att skriva presentationer kanske inte är min starka sida, men jag bor i ett litet hus med min fantastiska son. Vi älskar att hänga i trädgården, hoppa studsmatta, ha vattenkrig eller odla grönsaker tillsammans.</p>
          <p>Min kärlek till naturen och djur gör att jag gärna tar mig ut i skogen när jag behöver hämta energi. Att måla är ett annat sätt för mig att varva ner.</p>     
        </div>
      </div>
      <div id='section-two' className='about-section'>
        <img src={leon}/>
        <div className='section-text'>
          <p>Jag har tidigare jobbat som personlig assistent, ett yrke där jag fick utveckla min empati, lyhördhet och flexibilitet. Efter många år i yrket kände jag dock att jag behövde en ny utmaning som inte tog lika mycket emotionell energi, särskilt som förälder.</p>
          <p>Under en lunch föreslog min vän Tomas att jag skulle söka en YH-utbildning inom programmering, och jag blev genast nyfiken. Efter att ha kollat några YouTube-videor och skrivit mina första rader kod var jag fast – det var kärlek vid första if-satsen!
          <br/><br/>Jag kom in på utbildningen och fick lära mig Android- och iOS-utveckling, webapplikationer med React och Typescript, crossplattformutveckling med Flutter och Dart, och en kort kurs i backend med .NET och C#. 
          <br/>Eftersom jag älskar att måla, är det kanske inte förvånande att frontend lockar mest. Att skriva kod och se färg och design ta form på skärmen är en magisk känsla för mig.</p>
        </div>         
      </div>
    </div>
  )
}

export default About