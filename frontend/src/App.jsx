import React from 'react'
import TopNav from './Components/TopNav'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Components/Layout'
import HomePage from './Components/HomePage'
import LastMinuteDeals from './Components/LastMinuteDeals'

const App = () => {
  const location = useLocation();
  return (
    <div className='py-10 font-montserrat   '>
      <TopNav />
      <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/sidequests" element={<LastMinuteDeals />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
