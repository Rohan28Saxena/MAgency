import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Trustedby from './Components/Trustedby.jsx'
import Services from './Components/Services.jsx'
import OurWork from './Components/OurWork.jsx'
import Teams from './Components/Teams.jsx'
import ContactUs from './Components/ContactUs.jsx'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer.jsx'


const App = () => {
  const dotRef=useRef(null)
   const outlineRef=useRef(null)

  //  Refs for custom cursor position tracking
  const mouse=useRef({x:0, y:0})
  const position=useRef({x:0, y:0})


  useEffect(()=>{
    const handleMouseMove=(e)=>{
      mouse.current.x=e.clientX
      mouse.current.y=e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)
    const animate=()=>{
      position.current.x+=(mouse.current.x-position.current.x)*0.1
      position.current.y+=(mouse.current.y-position.current.y)*0.1

      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform=`translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform=`translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return()=>{
      document.removeEventListener('mousemove', handleMouseMove)

    }
  },[])



  const[theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem('theme'):'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Trustedby/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>

      {/* custom cursor ring */}

      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-50 transition-transform duration-100 ease-out'></div>

      {/* custom cursor dot */}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-50'></div>



     
    </div>
  )
}

export default App
