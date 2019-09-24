import React from 'react';
import users from './Users.module.css'

export default function Users(props) {
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          followed: false,
          avatar: 'https://avatanplus.com/files/resources/small/5856893091e2d1591207e5d6.png',
          fullName: 'ivan',
          status: 'im a boss',
          location: {city: 'Kirov', country: 'Russia'}
        },
        {
          id: 2,
          followed: true,
          avatar: 'https://avatanplus.com/files/resources/small/5856893091e2d1591207e5d6.png',
          fullName: 'anton',
          status: 'im a boss',
          location: {city: 'Rastov', country: 'Russia'}
        },
        {
          id: 3,
          followed: false,
          avatar: 'https://avatanplus.com/files/resources/small/5856893091e2d1591207e5d6.png',
          fullName: 'demian',
          status: 'im a boss',
          location: {city: 'jepa', country: 'Russia'}
        },
        {
          id: 4,
          followed: true,
          avatar: 'https://avatanplus.com/files/resources/small/5856893091e2d1591207e5d6.png',
          fullName: 'anton',
          status: 'im a boss',
          location: {city: 'Kirov', country: 'Russia'}
        }
      ]
    );
  }
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img className={users.usersPhoto} src={u.avatar} alt='ava'/>
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>
      </div>)
    }
  </div>
}