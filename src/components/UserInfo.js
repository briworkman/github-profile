import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/users/briworkman')
      .then((response) => {
        console.log(response);
        setUser(response.data);

        // //Stretch
        // const calendarDiv = document.createElement('div');
        // cards.appendChild(calendarDiv);

        // calendarDiv.classList.add('calendar');

        // new GitHubCalendar('.calendar', 'briworkman');
        // //Stretch
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <img src={user.avatar_url} />
      <h1>{user.name}</h1>
      <a
        href={`https://github.com/${user.login}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {user.login}
      </a>
      <h2>{user.location}</h2>
      <h2>{user.created_at}</h2>
      <h3>Repos: {user.public_repos}</h3>
      <h3>Followers: {user.followers}</h3>
      <h3>Following: {user.following}</h3>
    </div>
  );
}

export default UserInfo;
