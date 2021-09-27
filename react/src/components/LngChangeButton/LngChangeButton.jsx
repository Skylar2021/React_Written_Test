import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'

export default function LngChangeButton({handleLngChange}) {
    const {t} = useTranslation();
    let currentLang = i18n.language

    const changeLang = ({target})=>{
        handleLngChange(target.value)
    }
    return (
        <>
        { currentLang === 'en'?
        <button className="button" onClick={e=>changeLang(e)} value={'can'}>{t('canButton')}</button>
        :
        <button className="button" onClick={e=>changeLang(e)} value={'en'}>{t('engButton')}</button>
         }
        </>
    )
}
