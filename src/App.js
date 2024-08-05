import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Login';
import Register from './Signup';

function App() {
  return (
    
      <div className="App">
       
        <BrowserRouter>
        <Routes>
           <Route index element={<Home/>} />
        
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />   </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;

