import React from 'react';

import { Grid } from '@material-ui/core';
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './estatics/navbar/NavBar';
import Footer from './estatics/footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
