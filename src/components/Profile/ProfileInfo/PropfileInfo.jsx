import React from 'react'
import p from './ProfileInfo.module.css'


export default function ProfileInfo() {
    return (<div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
                alt=""/>
            <div className={p.descriptionBlock }>ava + discription</div>
        </div>
    )
};