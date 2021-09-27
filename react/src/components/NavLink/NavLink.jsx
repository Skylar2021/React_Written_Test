import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavLink({ toggleNav }) {
    const { t } = useTranslation()

    return (
        <div className="nav-items">

            <Link className="nav-item" to="/home" onClick={() => toggleNav()}>
                <i className="fas fa-home nav-menu-icon"></i>
                {t('link.home')}
            </Link>
            <Link className="nav-item" to="/about-me" onClick={() => toggleNav()}>
                <i className="fas fa-smile nav-menu-icon"></i>
                {t('link.aboutMe')}
            </Link>
            <Link className="nav-item" to="/gallery" onClick={() => toggleNav()}>
                <i className="fas fa-film nav-menu-icon"></i>
                {t('link.gallery')}
            </Link>
            <Link className="nav-item" to="/setting" onClick={() => toggleNav()}>
                <i className="fas fa-cog nav-menu-icon"></i>
                {t('link.setting')}
            </Link>

        </div>
    )
}
