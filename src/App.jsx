import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* nested pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
