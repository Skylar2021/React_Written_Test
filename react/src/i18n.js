import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEn = {
    link: {
        aboutMe: 'About',
        home: 'Home',
        setting:'Setting',

    },
    loginPage: {
        loginTitle: 'Log In',
        loginBtn: 'Enter',
        text: 'Please enter your name'
    },
    welcomePage: {
        welcome: 'Welcome to My Website!',
        selfIntro: 'Hello {{guestName}}~ I am Skylar. I built this website with React.',
    },
    aboutmePage: {
        aboutmeTitle: 'About Me',
        text: `A kind and responsible person who seeks an entry level front-end developer
        position where I can apply my knowledge in frontend web development and
        bring improvement to human life with innovation technology. I like taking photos(film), RPG game,
        coding, reading, hiking, eating, listening to music, writing diary, travelling, movies...`
    },
    settingPage:{
        title:'Setting',
        logoutBtn:'Log Out',
    },
    engButton: 'English',
    canButton: 'Cantonese'
};
const translationCan = {
    link: {
        home: '主頁',
        aboutMe: '關於',
        setting: '設定'
    },
    loginPage: {
        loginTitle: '登入',
        loginBtn: '按此進入',
        text: '想我點稱呼你?'
    },
    welcomePage: {
        welcome: '歡迎你黎欣賞我嘅網頁！',
        selfIntro: '你好 {{guestName}}~ 我係Skylar， 呢個網頁係用React整。',
    },
    aboutmePage: {
        aboutmeTitle: '關於我',
        text: `我係個友善有責任心嘅人，搵緊初級前端開發人員位置。我有一個抱負，希望我嘅工作能夠我嘅技能，成為推進社會積極進步嘅一個助力。
        我鍾意影菲林相、打(無聊)機、打code、睇書、行山、食野、聽歌、寫日記、去旅行、睇電影...等等。`
    },
    settingPage:{
        title:'設定',
        logoutBtn:'登出',
    },
    engButton: '英文',
    canButton: '廣東話'
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEn },
            can: { translation: translationCan }
        },
        lng: "en",
        fallbacklng: "en",
        interpolation: {
            escapeValue: false,
        },
    })


export default i18n;