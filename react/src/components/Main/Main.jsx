import React from 'react'
import { Route, Switch } from 'react-router'
import About from '../About/About'
import Navbar from '../Navbar/Navbar'
import Welcome from '../Welcome/Welcome'
import NF from '../404NF/NF';


export default function Main({ guestName, handleLngChange, isLogin }) {
    return (
        <>
            <Navbar isLogin={isLogin} handleLngChange={handleLngChange} />
            <Switch>
                <Route path="/welcome" >
                    <Welcome name={guestName} handleLngChange={handleLngChange} />
                </Route>
                <Route path="/about-me">
                    <About />
                </Route>

                <Route path="/">
                    <NF />
                </Route>
            </Switch>
        </>

    )
}
