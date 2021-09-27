import React from 'react'
import NavLink from '../NavLink/NavLink'

export default function Navbar({ handleLngChange,handleisLogin,isLogin,handleNameChange }) {
    const toggleNav = () => {
        let toggle = document.querySelector('nav.web-nav').style
        toggle.left = toggle.left === '0px' ? toggle.left = '-60%' : toggle.left = '0px';
    }

    return (
        <>
        <nav className="mobile-nav">
            <i className="fas fa-bars nav-icon" onClick={()=>toggleNav()}></i>
        </nav>
        <nav className="web-nav">
            {isLogin && <NavLink 
                            toggleNav={toggleNav} 
                            handleLngChange={handleLngChange} 
                            handleisLogin={handleisLogin} 
                            handleNameChange={handleNameChange}/> }
        </nav>
        </>
    )
}
