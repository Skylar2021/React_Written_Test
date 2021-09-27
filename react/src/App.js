import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router';
// import { Link, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar'
import LngChangeButton from './components/LngChangeButton/LngChangeButton'
import i18n from 'i18next';
import './i18n'
import About from './components/About/About';
import NF from './components/404NF/NF';
import Setting from './components/Setting/Setting';
// import bgImage from './img/seaside1.jpg'




function App() {
    const { t, i18n } = useTranslation();

    const handleLngChange = (code) => {
        i18n.changeLanguage(code)
        return setLangCode(code)
    }

    const [guestName, setGuestName] = useState('');
    const handleNameChange = (text) => {
        return setGuestName(text)
    }

    const [isLogin, setisLogin] = useState(false)
    const handleisLogin = (status) => {
        return setisLogin(status)
    }
    const [isAble, setIsAble] = useState(false)

    const [langCode, setLangCode] = useState('en')

    return (
        <>


            {isLogin ?
                <div className="main-container">
                    {/* <img className="bg-image" src={bgImage}/> */}
                <Navbar
                    isLogin={isLogin}
                    handleLngChange={handleLngChange}
                    handleisLogin={handleisLogin}
                    handleNameChange={handleNameChange} />
                    <Switch>
                        <Route path="/home" >
                            <Welcome
                                guestName={guestName}
                                handleLngChange={handleLngChange}
                                isLogin={isLogin} />
                        </Route>
                        <Route path="/about-me">
                            <About />
                        </Route>
                        <Route path="/setting">
                            <Setting handleNameChange={handleNameChange} handleisLogin={handleisLogin} handleLngChange={handleLngChange} />
                        </Route>
                        <Route path="/">
                            <NF />
                        </Route>
                    </Switch>
                </div>
                :
                <Switch>
                    <Route path="/" exact>
                        <Login
                            isLogin={isLogin}
                            name={guestName}
                            handleNameChange={handleNameChange}
                            handleisLogin={handleisLogin}
                            handleLngChange={handleLngChange} />
                    </Route>
                    <Route path="/">
                        <NF />
                    </Route>
                </Switch>
            }




            {/* {isLogin ? <Main isLogin={isLogin} handleLngChange={handleLngChange} guestName={guestName} /> : <Login isLogin={isLogin} name={guestName} handleNameChange={handleNameChange} handleisLogin={handleisLogin} handleLngChange={handleLngChange} />} */}
        </>
    );
}

export default App;
