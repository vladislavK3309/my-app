import React from 'react'

export default function FriendListItem(props) {
    return (
        <div ><img src={props.avatar} alt=""/>
            <div id={props.id}>
                {props.name}
            </div>
        </div>
    )
};
