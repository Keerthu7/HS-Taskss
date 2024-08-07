import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route index element={<SignUp/>} />
            <Route path='/SignIn' element={<SignIn/>} />
            <Route path='/Home' element={<Home/>} />
           
        </Routes>
        </BrowserRouter>
  
        
      </div>
    
  );
}

export default App;

