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
  <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-[#050505] z-[9999]">
    <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(255,0,0,0.3)]"></div>
    <p className="mt-6 text-[var(--primary)] league-spartan font-black uppercase tracking-[0.3em] animate-pulse">
      Flame Fitness
    </p>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='relative flex flex-col items-center w-full overflow-x-hidden min-h-screen bg-[#050505]' style={{ maxWidth: '100vw' }}>
        {/* Global Animated Background - Optimized for performance */}
        <Suspense fallback={null}>
          <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none will-change-transform">
            <DarkVeil />
          </div>
        </Suspense>

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