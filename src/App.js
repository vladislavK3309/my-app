import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import News from "./components/Nav/News/News";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export default function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
