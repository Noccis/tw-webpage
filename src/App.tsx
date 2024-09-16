import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Art from './pages/Art'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import LanguageHandler from './components/LanguageHandler'

function App() {

  return (
    <>
      <header>
        <h4 id='title'>Toni Wincent</h4>
        <LanguageHandler />
        <Menu />
      </header>
      <main>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/art" element={ <Art /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
