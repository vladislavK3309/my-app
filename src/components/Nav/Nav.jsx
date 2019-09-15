import React from "react";
import n from './Nav.module.css'
import {NavLink} from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className={n.nav}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/friends'>Friends</NavLink>
            </div>

        </nav>
    )
}

