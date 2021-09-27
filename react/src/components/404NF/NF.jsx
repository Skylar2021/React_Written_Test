import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function NF({isLogin}) {
    const {t} = useTranslation()
    return (
        <div className="error-page">
        <h1 className="error-page">404: Not Found</h1>
        <hr/>
        {isLogin ? <Link to="/home"><h4 className="error-link">{t('errorPage.textForLogined')}</h4></Link>:<Link to="/"><h4 className="error-link">{t('errorPage.textForLogin')}</h4></Link>}
        </div>

    )
}
