import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavLink() {
    const { t } = useTranslation()

    return (
        <div className="nav-items">

            <Link className="nav-item" to="/home">
                {t('link.home')}
            </Link>
            <Link className="nav-item" to="/about-me">
                {t('link.aboutMe')}
            </Link>
            <Link className="nav-item" to="/setting">
                {t('link.setting')}
            </Link>

        </div>
    )
}
