import React from 'react';
import star from '../assets/star.png';
import fork from '../assets/fork.png';

function TopRepos(props) {
  return (
    <div className='repo-container'>
      <h1>Top Repos</h1>
      <div className='repo-cards'>
        {props.topRepos.map((repos) => {
          return (
            <div className='top-repos' key={repos.id}>
              <h2>{repos.name}</h2>
              <div className='repo-data'>
                <p>{repos.language}</p>
                <p>{repos.size} MB</p>
                <div className='icon-container'>
                  <img src={star} alt='star' className='star-icon' />
                  <p>{repos.stargazers_count}</p>
                </div>
                <div className='icon-container'>
                  <img src={fork} alt='fork' className='fork-icon' />
                  <p>{repos.forks}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRepos;
