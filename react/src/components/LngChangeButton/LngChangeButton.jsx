import React from 'react'
import { useTranslation, i18next } from 'react-i18next';
// import i18n from 'react-i18next';
import i18n from '../../i18n'




export default function LngChangeButton({handleLngChange}) {
    const {t} = useTranslation();
    let currentLang = i18n.language
    // console.log(i18n)
    // console.log(currentLang)

    const changeLang = ({target})=>{
        // console.log(target.value)
        handleLngChange(target.value)
    }
    return (
        <>
        { currentLang === 'en'?
        <button onClick={e=>changeLang(e)} value={'can'}>{t('canButton')}</button>
        
        :
        <button onClick={e=>changeLang(e)} value={'en'}>{t('engButton')}</button>
         }
        </>
    )
}
