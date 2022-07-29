import React from 'react';  
import Home from './pages/Home/Home';
import NavBar from './estatics/navbar/NavBar';
import Footer from './estatics/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      

      </Routes>
        <Footer/>
    </Router>
  
  );
}

export default App;
