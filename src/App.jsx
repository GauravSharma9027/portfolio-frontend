import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

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
    </>

  )
}

export default App
