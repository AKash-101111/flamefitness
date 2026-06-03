import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DarkVeil from './Components/DarkVeil'
import ScrollToTop from './Components/ScrollToTop'

// Lazy load pages for performance optimization
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Programs = lazy(() => import('./Pages/Programs'))
const Gallery = lazy(() => import('./Pages/Gallery'))
const Contact = lazy(() => import('./Pages/Contact'))

const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#050505]">
    <div className="w-12 h-12 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App