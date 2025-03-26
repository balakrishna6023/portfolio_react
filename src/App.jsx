import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from'./components/Hero/Hero'
import About from './components/about/About'
import Services from './components/service/Services'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
