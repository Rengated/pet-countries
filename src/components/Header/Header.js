import react from 'react'
import { useState } from 'react'
import '../../styles/header.css'


export const Header = () => {
    const [theme, setTheme] = useState('White')

    const handleThemeClick = () => {
        setTheme(theme == 'White' ? 'Black' : 'White')
    }
 
    return (
        <div className='container-xl d-flex justify-content-between header'>
            <h1 className='header__title'>Where in the world ?</h1>
            <button className='header__button' onClick={handleThemeClick}>{theme} mode</button>
        </div>
    )
}