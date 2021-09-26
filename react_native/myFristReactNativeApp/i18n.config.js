import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEn = {
    tab: {
        login: 'Log In',
        home: 'Home',
        gallery: 'Gallery',
        setting: 'Setting',
    },
    loginPage: {
        loginTitle: 'Log In',
        loginBtn: 'Click to Log In',
        text: 'Please enter your name',
    },
    welcomePage: {
        welcome: 'Welcome!',
        selfIntro: 'Hello {{guestName}} I am Skylar. This is my first mobile application. I built this website with React Native.',
        next:'Next',
    },
    galleryPage:{
        text:'Find out more on my instagram',
    },
    settingPage: {
        settingTitle: 'Setting',
        logoutBtn: 'Log Out',
        text: 'Are you sure to log out??',
    },
    aboutmePage: {
        aboutmeTitle: 'About Me',
        text: `A kind and responsible person who seeks an entry level front-end developer
        position where I can apply my knowledge in frontend web development and
        bring improvement to human life with innovation technology. I like taking photos(film), RPG game,
        coding, reading, hiking, eating, listening to music, writing diary, travelling, movies...`
    },
    engButton: 'English',
    canButton: 'Cantonese',
};

const translationCan = {
    tab: {
        login: '登入',
        home: '主頁',
        gallery: '相片',
        setting: '設定',
    },
    loginPage: {
        loginTitle: '登入',
        loginBtn: '按此登入',
        text: '想我點稱呼你?',
    },
    welcomePage: {
        welcome: '歡迎你！',
        selfIntro: '你好 {{guestName}}~ 我係Skylar，呢個手機應用程式係用React Navtive整，係我第一個嘅手機應用程式。',
        next:'進入主畫面',
    
    },
    galleryPage:{
        text:'按此繼續欣賞我嘅創作',
    },
    settingPage: {
        logoutTitle: '設定',
        logoutBtn: '登出',
        text: '真係走啦?',
    },
    aboutmePage: {
        aboutmeTitle: '關於我',
        text: `我係個友善有責任心嘅人，搵緊初級前端開發人員位置。我有一個抱負，希望我嘅工作能夠我嘅技能，成為推進社會積極進步嘅一個助力。
        我鍾意影菲林相、打(無聊)機、打code、睇書、行山、食野、聽歌、寫日記、去旅行、睇電影...等等。`,

    },
    engButton: '英文',
    canButton: '廣東話',
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