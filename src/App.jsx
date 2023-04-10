import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom'

import { UserContextProvider } from './contexts/UserContext'
import { useUser } from './hook/contexts/useUser'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import './styles/main.css'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path="/login" element={ <Login /> } />

          <Route path="/register" element={ <Register /> } />
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App
