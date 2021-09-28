import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEn = {
    link: {
        aboutMe: 'About',
        home: 'Home',
        gallery: 'Gallery',
        setting:'Setting',
        skill:'Skills',
    },
    loginPage: {
        loginTitle: 'Log In',
        loginBtn: 'Enter',
        text: 'Please enter your name'
    },
    welcomePage: {
        welcome: 'Welcome to My Website!',
        greeting: 'Hello',
        guestname:'{{guestName}}~',
        selfIntro: 'I am Skylar. I built this website with React.',
    },
    aboutmePage: {
        aboutmeTitle: 'About Me',
        text: `A kind and responsible person who seeks an entry level front-end developer
        position where I can apply my knowledge in frontend web development and
        bring improvement to human life with innovation technology. I like taking photos(film), RPG game,
        coding, reading, hiking, eating, listening to music, writing diary, travelling, movies...`
    },
    galleryPage:{
        title: 'Gallery',
        text:'Find out more on my instagram',

    },
    skillPage:{
        title: 'Skills',
    },
    settingPage:{
        title:'Setting',
        logoutBtn:'Log Out',
    },
    errorPage:{
        title: '404: Not Found',
        textForLogin: 'To Log In Page',
        textForLogined: 'To Home Page',
    },
    engButton: 'English',
    canButton: 'Cantonese'
};
const translationCan = {
    link: {
        home: '主頁',
        aboutMe: '關於',
        gallery: '相片',
        skill:'技能',
        setting: '設定'
    },
    loginPage: {
        loginTitle: '登入',
        loginBtn: '按此進入',
        text: '想我點稱呼你?'
    },
    welcomePage: {
        welcome: '歡迎你黎欣賞我嘅網頁！',
        greeting: '你好',
        guestname:'{{guestName}}~',
        selfIntro: '我係Skylar， 呢個網頁係用React整。',
    },
    aboutmePage: {
        aboutmeTitle: '關於我',
        text: `我係個友善有責任心嘅人，搵緊初級前端開發人員位置。我有一個抱負，希望我嘅工作能夠善用科技呢樣工具，成為推進社會積極進步嘅一個助力。
        我鍾意影菲林相、打(唔算好無聊嘅)機、打code、睇書、行山、食野、聽歌、寫日記、去旅行、睇電影...等等。`
    },
    galleryPage:{
        title: '相片',
        text:'按此繼續欣賞我嘅創作',

    },
    skillPage:{
        title: '技能',
    },
    settingPage:{
        title:'設定',
        logoutBtn:'登出',
    },
    errorPage:{
        title: '404: 找不到位置',
        textForLogin: '按此回到主頁',
        textForLogined: '按此回到登入頁面',
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