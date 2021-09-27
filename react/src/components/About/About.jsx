import React from 'react'
import { useTranslation } from 'react-i18next';
import me from '../../img/me.jpg';


export default function About() {
    const { t } = useTranslation();

    return (
        <div className="about-me">
            <h1 className="title">{t('aboutmePage.aboutmeTitle')}</h1>
            <div className="about-me-content">
                <p className="self-intro">
                    {t('aboutmePage.text')}
                </p>
                <div className="my-img" style={{ backgroundImage: `url(${me})` }}></div>
            </div>
                <a className="github-link" href="https://github.com/Skylar2021" target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
    )
}
