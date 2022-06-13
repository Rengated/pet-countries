import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import { Header } from './components/Header/Header';
 


function App() {
 
    return (
         <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>          
            </Routes>
        </>
     
        
 
    )
}
export default App;