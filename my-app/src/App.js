import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import LngChangeButton from './components/LngChangeButton/LngChangeButton'
import './i18n'
import { Route, Switch } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import About from './components/About/About';
import NF from './components/404NF/NF';



function App() {
    const { t, i18n } = useTranslation();

    const handleLngChange = (code) => {
        i18n.changeLanguage(code)
    }

    const [guestName, setGuestName] = useState(null);
    const handleNameChange = (text) => {
        return setGuestName(text)
    }

    const [isLogin, setisLogin] = useState(false)
    const handleisLogin = (status) => {
        return setisLogin(status)
    }

    return (
        <>
            <Navbar
                isLogin={isLogin}
                handleLngChange={handleLngChange}
                handleisLogin={handleisLogin}
                handleNameChange={handleNameChange} />

            <Switch>
                <Route path="/welcome" exact>
                    <Welcome
                        guestName={guestName}
                        handleLngChange={handleLngChange}
                        isLogin={isLogin} />
                </Route>
                <Route path="/about-me">
                    <About />
                </Route>

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
            {/* {isLogin ? <Main isLogin={isLogin} handleLngChange={handleLngChange} guestName={guestName} /> : <Login isLogin={isLogin} name={guestName} handleNameChange={handleNameChange} handleisLogin={handleisLogin} handleLngChange={handleLngChange} />} */}
        </>
    );
}

export default App;
