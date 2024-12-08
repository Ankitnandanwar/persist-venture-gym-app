import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Plans/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App