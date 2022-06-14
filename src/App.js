import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import SinglePage from './pages/single-page';
import { Header } from './components/Header/Header';



function App() {
    const [theme, setTheme] = useState()

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme){
            setTheme(theme)
        }
        else{
            setTheme('White')
            localStorage.setItem('theme', 'White')
        }

    })

    const changeTheme = (value) => {
        localStorage.setItem('theme', value)
        setTheme(value)

    }

 
    return (
         <>
            <Header changeTheme={changeTheme} theme={theme}/>
            <Routes>
                <Route path="/" element={<Home theme={theme}/>}/> 
                <Route path='/country' element={<SinglePage theme={theme} />}/>         
            </Routes>
         </>
     
        
 
    )
}
export default App;