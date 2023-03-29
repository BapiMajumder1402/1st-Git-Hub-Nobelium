import React from 'react';
import Nav from './Nav';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
// import {Link} from 'react-router-dom'
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/About" element={<About/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
