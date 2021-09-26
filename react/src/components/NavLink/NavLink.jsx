import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavLink() {
    const { t } = useTranslation()

    return (
        <div>

            <Link to="/home">
            {t('link.home')}
            </Link>
            <Link to="/about-me">
                {t('link.aboutMe')}
            </Link>
            <Link to="/setting">
                {t('link.setting')}
            </Link>

        </div>
    )
}
