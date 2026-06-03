import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DarkVeil from './Components/DarkVeil'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home'
import About from './Pages/About'
import Programs from './Pages/Programs'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='relative flex flex-col items-center w-full overflow-x-hidden min-h-screen bg-transparent' style={{ maxWidth: '100vw' }}>
        {/* Global Animated Background - Optimized for performance */}
        <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none will-change-transform">
          <DarkVeil />
        </div>

        <Navbar />
        
        <main className="w-full flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App