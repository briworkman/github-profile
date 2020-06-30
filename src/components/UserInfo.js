import React from 'react';
import calendar from '../assets/calendar.png';
import mapMarker from '../assets/map-marker.png';
import { PieChart, Pie, Cell } from 'recharts';
import RepoData from './RepoData';

function UserInfo(prop) {
  let props = prop.props;
  return (
    <div className='container'>
      <div className='main-container'>
        <div className='user-container'>
          <img
            src={props.user.avatar_url}
            className='profile-pic'
            alt={`${props.username} profile picture`}
          />
          <h1>{props.user.name}</h1>
          <a
            href={`https://github.com/${props.user.login}`}
            target='_blank'
            rel='noopener noreferrer'
            className='username-link'
          >
            @{props.user.login}
          </a>
          <div className='user-info'>
            <div className='info'>
              <img
                src={mapMarker}
                alt='Location Marker Icon'
                className='icons'
              />
              <p>{props.user.location}</p>
            </div>
            <div className='info'>
              <img src={calendar} alt='Calendar Icon' className='icons' />
              <p>
                Joined{' '}
                {new Date(props.user.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
          <div className='github-stats'>
            <div className='stats'>
              <h3>{props.user.public_repos}</h3>
              <p>REPOSITORIES</p>
            </div>
            <div className='stats'>
              <h3>{props.user.followers}</h3>
              <p>FOLLOWERS</p>
            </div>
            <div className='stats'>
              <h3>{props.user.following}</h3>
              <p>FOLLOWING</p>
            </div>
          </div>
        </div>
        <div className='info-container'>
          <div className='chart'>
            <h1>Top Languages</h1>
            <PieChart width={400} height={300} className='pie-chart'>
              <Pie
                data={props.langData ? props.langData : []}
                labelLine={true}
                fill='#8884d8'
                dataKey='value'
                label={(entry) => entry.label}
              >
                {props.langData
                  ? props.langData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={props.COLORS[index % props.COLORS.length]}
                      />
                    ))
                  : []}
              </Pie>
            </PieChart>
          </div>
          {props.repoData ? <RepoData repoData={props.repoData} /> : null}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
