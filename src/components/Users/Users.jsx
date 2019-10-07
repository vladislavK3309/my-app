import React from 'react';
import users from './Users.module.css'
import altava from '../../assets/img/altava.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div>
    <div>
      {pages.map(p => {
        return <span
          className={`${props.currentPage === p && users.selectPage} ${users.pages}`}
          onClick={() => {
            props.onPageChanged(p);
          }}
        >{p}</span>
      })}
    </div>
    {
      props.users.map(u =>
        <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                  <img
                    className={users.usersPhoto}
                    src={u.photos.small != null ?
                      u.photos.small
                      : altava}
                    alt='ava'
                  />
                </NavLink>
            </div>
            <div>
                {u.followed
                  ? <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {props.unfollow(u.id)}}>
                    Unfollow</button>
                  : <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {props.follow(u.id)}}>
                    Follow</button>}
                  </div>
                  </span>
          <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                  </span>
          <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                  </span>
        </div>)
    }
  </div>
};

export default Users;