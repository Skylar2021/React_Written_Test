import React from 'react'
import { useTranslation } from 'react-i18next';
import me from '../../img/me.jpg';


export default function About() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('aboutmePage.aboutmeTitle')}</h1>
            <p class="self-intro">
                {t('aboutmePage.text')}
            </p>
            <div style={ {width: '200px', height: '200px', backgroundImage: `url(${me})`, backgroundSize:'cover'}}></div>
        </div>
    )
}
