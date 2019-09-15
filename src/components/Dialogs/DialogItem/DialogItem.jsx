import React from 'react'
import d from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export default function DialogsItem(props){

    const path = '/dialogs/' + props.id;
    return (
        <div className={d.dialogs}>{props.dialog}
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

