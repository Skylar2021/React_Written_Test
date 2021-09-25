import React from 'react'
import { useTranslation } from 'react-i18next';


export default function LngChangeButton({lngCode,handleLngChange, btnText}) {
    const {t} = useTranslation();

    const changeLang = ({target})=>{
        console.log(target.value)
        handleLngChange(target.value)
    }
    return (
        <button onClick={e=>changeLang(e)} value={lngCode}>
            {t(btnText)}
        </button>
    )
}
