import React from 'react'
import { useTranslation } from 'react-i18next';
import LngChangeButton from '../LngChangeButton/LngChangeButton'
import Navbar from '../Navbar/Navbar';




export default function Welcome({guestName,handleLngChange,isLogin}) {
    const {t} = useTranslation();

    return (
        <div>
            {/* <Navbar isLogin={isLogin} handleLngChange={handleLngChange} /> */}

            <h1>{t("welcomePage.welcome", {guestName})}</h1>
            <p>{t('welcomePage.selfIntro')}</p>
        </div>
    )
}
