import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Error404 from './pages/Error404/Error404'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
