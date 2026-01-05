import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact  />
        <Footer />
        
        

      </div>
     
    </>
  )
}

export default App
