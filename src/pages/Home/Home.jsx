import React from 'react'
import Intro from '../Intro/Intro'
import Services from '../Services/Services'
import About from '../About/About'
import Tools from '../Tools/Tools'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import Contacts from '../Contacts/Contacts'
import Resume from '../Resume/Resume'

function Home() {
  return (
    <>
    <Intro />
    <Services/>
    <About />
    <Tools />
    <Skills />
    <Work />
    <Resume />
    <Contacts />
    </>
  )
}

export default Home
