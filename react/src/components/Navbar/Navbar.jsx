import React from 'react'
import { useTranslation } from 'react-i18next';
import LngChangeButton from '../LngChangeButton/LngChangeButton';
import NavLink from '../NavLink/NavLink'


export default function Navbar({ handleLngChange,handleisLogin,isLogin,handleNameChange }) {
    const { t, i18n } = useTranslation();

    return (
        <nav>
            {isLogin && <NavLink handleLngChange={handleLngChange} handleisLogin={handleisLogin} handleNameChange={handleNameChange}/> }
            {/* <LngChangeButton handleLngChange={handleLngChange} /> */}
            {/* <LngChangeButton handleLngChange={handleLngChange} lngCode="can" btnText="canButton" /> */}
            
        </nav>
    )
}
