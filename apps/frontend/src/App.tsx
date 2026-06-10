import { useState } from 'react'

import './App.css'
import { Route,  Routes } from 'react-router'

function App() {

  return (
    <Routes>
        <Route path="/dashboard" element={<p>Dashboard</p>} />
        <Route path="/predictions" element={<p>Predictions</p>} />
        <Route path="/matchDetails" element={<p>Match Details</p>} />
    </Routes>
  )
}

export default App
