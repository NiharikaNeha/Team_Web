import React from 'react'
import {Navbar} from './Components/Navbar'
import Footer from './Components/Footer.Jsx'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/AboutUs'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App