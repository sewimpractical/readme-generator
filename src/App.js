import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages';
import About from './pages/about';
import Templates from './pages/templates';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/templates' exact element={<Templates/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
    </Router>  
  );
} 

export default App;
