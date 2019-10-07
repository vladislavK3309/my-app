import React from 'react';
import h from './Header.module.css'
import {NavLink} from "react-router-dom";

export default function Header(props) {
    return (
            <header className={h.header}>
                <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png" alt=""/>
                <div className={h.loginBlock}>
                  {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>login</NavLink>
                  }
                </div>
            </header>
    )
}

