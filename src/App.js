import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/Nav/News/News";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export default function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
