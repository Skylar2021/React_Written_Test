import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function Welcome({ guestName }) {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="title">{t("welcomePage.welcome")}</h1>
            <p className="text-center">{t('welcomePage.greeting')} <i>{t('welcomePage.guestname', { guestName })} </i>{t('welcomePage.selfIntro')}</p>
        </div>
    )
}
