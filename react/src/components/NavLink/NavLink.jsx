import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavLink({toggleNav}) {
    const { t } = useTranslation()

    return (
        <div className="nav-items">

            <Link className="nav-item" to="/home" onClick={()=>toggleNav()}>
                {t('link.home')}
            </Link>
            <Link className="nav-item" to="/about-me" onClick={()=>toggleNav()}>
                {t('link.aboutMe')}
            </Link>
            <Link className="nav-item" to="/gallery" onClick={()=>toggleNav()}>
                {t('link.gallery')}
            </Link>
            <Link className="nav-item" to="/setting" onClick={()=>toggleNav()}>
                {t('link.setting')}
            </Link>

        </div>
    )
}
