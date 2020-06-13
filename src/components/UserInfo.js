import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calendar from '../assets/calendar.png';
import mapMarker from '../assets/map-marker.png';

function UserInfo() {
  //   const [user, setUser] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get('https://api.github.com/users/briworkman')
  //       .then((response) => {
  //         console.log(response);
  //         setUser(response.data);
  //       })

  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const user = {
    avatar_url:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80',
    name: 'Brianna Workman',
    login: 'briworkman',
    location: 'Auburn Hills, MI',
    created_at: 'June 13, 2019',
    public_repos: '108',
    followers: '19',
    following: '25',
  };

  return (
    <div className='user-container'>
      <img src={user.avatar_url} className='profile-pic' />
      <h1>{user.name}</h1>
      <a
        href={`https://github.com/${user.login}`}
        target='_blank'
        rel='noopener noreferrer'
        className='username-link'
      >
        @{user.login}
      </a>
      <div className='user-info'>
        <div className='info'>
          <img src={mapMarker} alt='Location Marker Icon' className='icons' />
          <p>{user.location}</p>
        </div>
        <div className='info'>
          <img src={calendar} alt='Calendar Icon' className='icons' />
          <p>{user.created_at}</p>
        </div>
      </div>
      <div className='github-stats'>
        <h3>{user.public_repos}</h3>
        <h3>{user.followers}</h3>
        <h3>{user.following}</h3>
      </div>
    </div>
  );
}

export default UserInfo;
