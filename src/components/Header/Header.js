import react from 'react'
import { useState } from 'react'
import '../../styles/header.css'


export const Header = (props) => {
    

    const handleThemeClick = () => {
        props.changeTheme(props.theme == 'White' ? 'Dark' : 'White')
    }
    
    return (
        <div className={`${props.theme == 'White'? 'White-Header' : 'Dark-Header'}`}>
            <div className={`container-xl d-flex justify-content-between header `}>
                <h1 className='header__title'>Where in the world ?</h1>
                <button className='header__button' onClick={handleThemeClick}>
                    <i className="fa-solid fa-moon header__icon"></i>
                    <p>{props.theme} mode</p>
                </button>
            </div>
        </div>
    )
}