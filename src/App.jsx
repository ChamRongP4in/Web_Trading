import React from 'react'
import Header from './lib/Header'
import Footer from './lib/Footer'
import Today from './page/Today'
import Daily from './page/Daily'
import Monthly from './page/Monthly'
import Yearly from './page/Yearly'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Today />} />
          <Route path='/daily' element={<Daily />} />
          <Route path='/monthly' element={<Monthly />} />
          <Route path='/yearly' element={<Yearly />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
