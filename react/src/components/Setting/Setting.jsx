import React from 'react'
import { useTranslation } from 'react-i18next';
import LngChangeButton from '../LngChangeButton/LngChangeButton';
import { useHistory } from 'react-router';

export default function Setting({ handleisLogin, handleLngChange, handleNameChange }) {
    const { t } = useTranslation()
    let history = useHistory()
    const handleLogOut = () => {
        handleNameChange('')
        handleisLogin(false)
        history.replace("/");
    }
    return (
        <div className="setting">
            <h1 className="title">{t('settingPage.title')}</h1>
            <LngChangeButton handleLngChange={handleLngChange} />
            <button className="button" onClick={() => handleLogOut()  }>
                {t('settingPage.logoutBtn')}
            </button>
        </div>
    )
}
