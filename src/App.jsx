import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import './styles/main.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <Routes>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default App
