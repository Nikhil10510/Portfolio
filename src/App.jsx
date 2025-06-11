import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Skills from './components/Skills'
import Education from './components/Timeline/Education'
import Project from './components/Projects/Project'
import Contact from './components/contact'
import Footer from './components/footer'



const App = () => {
  return (
    <div className='bg-[#050414]'>
       <Navbar/>
       <Homepage/>
       <Skills/>
       <Education/>
       <Project/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
