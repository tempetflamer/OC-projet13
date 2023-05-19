import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Login />}></Route>
        <Route path="/dashboard/:userID" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
