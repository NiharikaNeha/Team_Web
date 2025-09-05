import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.Jsx'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/AboutUs'
import Gallery from './Pages/Gallery'
import Review from './Pages/Review'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App