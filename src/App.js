import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/pages/Home"; 
import Services from './Components/pages/Services'; 
import Products from './Components/pages/Products'; 
import SignUp from './Components/pages/SignUp'; 

function App() { 
return (
<>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/sign_up' element={<SignUp/>} />

        </Routes>
    </Router>
</>
);
}

export default App;
