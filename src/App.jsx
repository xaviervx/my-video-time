import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
