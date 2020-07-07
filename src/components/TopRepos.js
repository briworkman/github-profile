import React, { useState, useEffect } from 'react';
import star from '../assets/star.png';
import fork from '../assets/fork.png';

function TopRepos(props) {
  console.log('TOP REPOS', props);
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = (type) => {
    const LIMIT = 8;
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
    const sortProperty = map[type];
    const sorted = props.repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    if (props.repoData.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = (sortType) => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ['stars', 'forks', 'size'];

  return (
    <div className='repo-container'>
      <h1>Top Repos</h1>
      <div className='dropdown-wrapper'>
        <span className='label'>by</span>
        <div active={dropdownOpen}>
          <button className='dropdown__button' onClick={() => toggleDropdown()}>
            <label>{sortType}</label>
            <button>^</button>
          </button>
          <ul className='dropdown__list'>
            {sortTypes.map((type, i) => (
              <li className='dropdown__list-item' key={i}>
                <button onClick={() => changeRepoSort(type)}>{type}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='repo-cards'>
        {topRepos.map((repos) => {
          return (
            <a
              href={repos.svn_url}
              key={repos.id}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='top-repos'>
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
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default TopRepos;
