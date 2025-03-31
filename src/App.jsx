import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LayoutRoutes from './Routes/LayoutRoutes'
import AOS from 'aos'
import "aos/dist/aos.css"


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  })

  return (
    <>
    <LayoutRoutes/>
    </>
  )
}

export default App
