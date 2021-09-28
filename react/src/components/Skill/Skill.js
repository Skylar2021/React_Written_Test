import React from 'react'
import { useTranslation } from 'react-i18next';
import './Skill.css'

export default function Skill() {
    const { t } = useTranslation()

    return (
        <div className="my-skill">
            <h1 className="title">{t('skillPage.title')}</h1>
            <ul className="skill-list">
                <li className="skill">
                    <i className="fab fa-html5 skill-icon html"></i><span className="text">HTML</span>
                </li>
                <li className="skill">
                    <i className="fab fa-css3-alt skill-icon css"></i><span className="text">CSS</span>
                </li>
                <li className="skill">
                    <i className="fab fa-bootstrap skill-icon bootstrap"></i><span className="text">Bootstrap</span>
                </li>
                <li className="skill">
                    <i className="fab fa-js-square skill-icon js"></i><span className="text">JavaScript</span>
                </li>
                <li className="skill">
                    <i className="fab fa-react skill-icon react"></i><span className="text">React</span>
                </li>
                <li className="skill">
                    <i className="fab fa-react skill-icon react-native"></i><span className="text">React Native</span>
                </li>
            </ul>
        </div>
    )
}
