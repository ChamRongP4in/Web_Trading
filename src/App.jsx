import React from 'react'
import Header from './lib/Header'
import Footer from './lib/Footer'
import Body from './lib/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/daily' element={<h1>Daily Summery</h1>} />
          <Route path='/monthly' element={<h1>Monthly Summery</h1>} />
          <Route path='/yearly' element={<h1>Yearly Summery</h1>} />
        </Routes>
      </BrowserRouter>
      <Body />
      <Footer />
    </>
  )
}

export default App
