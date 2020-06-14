import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calendar from '../assets/calendar.png';
import mapMarker from '../assets/map-marker.png';
import GhPolyglot from 'gh-polyglot';
import { PieChart, Pie, Cell } from 'recharts';

function UserInfo() {
  const [user, setUser] = useState({});
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const getLangData = () => {
    const me = new GhPolyglot('briworkman');
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
      }
      setLangData(stats);
    });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/briworkman/repos?per_page=100`)
      .then((response) => {
        return response.json();
      })
      .then((json) => setRepoData(json))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    axios
      .get('https://api.github.com/users/briworkman')
      .then((response) => {
        // console.log(response);
        setUser(response.data);
      })

      .catch((err) => {
        console.log(err);
      });

    getLangData();
    getRepoData();
  }, []);

  var COLORS = langData
    ? langData.map((colors) => {
        return colors.color;
      })
    : null;

  //   var user = {
  //     avatar_url:
  //       'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80',
  //     name: 'Brianna Workman',
  //     login: 'briworkman',
  //     location: 'Auburn Hills, MI',
  //     created_at: '2019-06-13T19:23:02Z',
  //     public_repos: '108',
  //     followers: '19',
  //     following: '25',
  //   };

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
          <p>
            Joined{' '}
            {new Date(user.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
      <div className='github-stats'>
        <div className='stats'>
          <h3>{user.public_repos}</h3>
          <p>REPOSITORIES</p>
        </div>
        <div className='stats'>
          <h3>{user.followers}</h3>
          <p>FOLLOWERS</p>
        </div>
        <div className='stats'>
          <h3>{user.following}</h3>
          <p>FOLLOWING</p>
        </div>
      </div>
      <div className='chart'>
        <PieChart width={550} height={400} className='pie-chart'>
          <Pie
            data={langData ? langData : []}
            labelLine={true}
            fill='#8884d8'
            dataKey='value'
            label={(entry) => entry.label}
          >
            {langData
              ? langData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              : []}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default UserInfo;
