import React from 'react'
import d from './../Dialogs.module.css'



export default function Message(props) {
    return (
        <div className={d.message}>{props.message}</div>
    )
};

