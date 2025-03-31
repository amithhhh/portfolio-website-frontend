import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Footer from '../components/Footer/Footer'
import About from '../pages/About/About'
import Tools from '../pages/Tools/Tools'
import Skills from '../pages/Skills/Skills'
import Work from '../pages/Work/Work'
import Contacts from '../pages/Contacts/Contacts'
import Admin from '../pages/Admin/Admin'
import Dashboard from '../pages/Dashboard/Dashboard'
import MessageDetails from '../pages/MessageDetails/MessageDetails'
import PrivateRoute from '../../PrivateRoute/PrivateRoute'

function LayoutRoutes() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/tools' element={<Tools />}></Route>
                <Route path='/skills' element={<Skills />}></Route>
                <Route path='/works' element={<Work />}></Route>
                <Route path='/contacts' element={<Contacts />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
                <Route path='/dashboard/:id' element={<PrivateRoute><MessageDetails /></PrivateRoute>} ></Route>
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default LayoutRoutes
