import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/Nav/News/News";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import FriendList from "./components/Nav/Friends/FriendList/FriendList";

export default function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}
                                dispatch = {props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <FriendList state={props.state.sideBar}/>
            </div>
        </BrowserRouter>
    );
}
