import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Login from '../Login/Login';

export default function NavLink({ handleisLogin, handleNameChange }) {
    const { t } = useTranslation()
    const resetLogInStatus = () => {
        handleisLogin(false)
    }
    const resetGuestName = () =>{
        handleNameChange(null)
    }
    return (
        <div>
            <Link to="/" exact
                onClick={() => {
                    resetLogInStatus();
                    resetGuestName();
                }}>
                {t('link.logOut')}
            </Link>
            <Link to="/about-me">
                {t('link.aboutMe')}
            </Link>

        </div>
    )
}
