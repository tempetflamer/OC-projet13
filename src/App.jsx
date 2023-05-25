import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Error404 from './pages/Error404/Error404'
import User from './pages/User/User'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error404 />} />
        {/* <Route exact path="/" element={<Login />}></Route>
        <Route path="/dashboard/:userID" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
