import React from 'react';
import users from './Users.module.css'
import altava from '../../assets/img/altava.png'

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
                <img
                  className={users.usersPhoto}
                  src={u.photos.small != null ?
                    u.photos.small
                    : altava}
                  alt='ava'
                />
            </div>
            <div>
                {u.followed
                  ? <button onClick={() => {
                    props.unfollow(u.id)
                  }}>unfollow</button>
                  : <button onClick={() => {
                    props.follow(u.id)
                  }}>follow</button>
                }
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