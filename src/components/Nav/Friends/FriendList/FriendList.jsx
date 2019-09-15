import React from 'react'
import FriendListItem from "../FriendListItem/FriendListItem";
import s from './FriendList.module.css'

export default function FriendList(props) {
    const friendsItem = props.state.friends.map(f => <FriendListItem
        avatar={f.avatar} name={f.name} id={f.id} />);
    return (
        <div className={s.friends}>
            {friendsItem}
        </div>
    )
}