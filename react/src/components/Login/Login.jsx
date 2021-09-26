import React, { useState } from 'react'
import logo from '../../logo.svg';
import LngChangeButton from '../LngChangeButton/LngChangeButton'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';



export default function Login({ handleNameChange, handleisLogin, name, handleLngChange, isLogin }) {
    const { t } = useTranslation();

    let history = useHistory()

    const nameChanged = (target) => {
        let text = target.value
        handleNameChange(text)
    }

    const userLogin = (status) => {
        handleisLogin(status)
    }

    const isValidInput = () => {
        if (name) {
            console.log(name)
            userLogin(true)
            history.replace("/home");
        } else {
            return false;
        }

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{t('loginPage.loginTitle')}</h1>
                <label htmlFor="name">{t('loginPage.text')}</label>
                <input type="text" id="name" onChange={({ target }) => nameChanged(target)} required></input>
                <button
                    type="button"
                    value="Log in"
                    onClick={() => isValidInput()}
                    disabled={name ? false : true }
                    >
                    {t('loginPage.loginBtn')}
                </button>
            <LngChangeButton handleLngChange={handleLngChange} />
            </header>
        </div>
    );
}
