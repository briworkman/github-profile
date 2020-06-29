import React, { useEffect, useState } from 'react';
import star from '../assets/star.png';
import fork from '../assets/fork.png';

function TopRepos(repoData) {
  // const [topRepos, setTopRepos] = useState([]);
  // const [sortType, setSortType] = useState('stars');
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // // console.log(repoData.repoData);

  // const getTopRepos = (type) => {
  //   const LIMIT = 8;
  //   const map = {
  //     stars: 'stargazers_count',
  //     forks: 'forks_count',
  //     size: 'size',
  //   };

  //   const sortProperty = map[type];
  //   const sorted = repoData.repoData
  //     ? repoData.repoData
  //         .filter((repo) => !repo.fork)
  //         .sort((a, b) => b[sortProperty] - a[sortProperty])
  //         .slice(0, LIMIT)
  //     : console.log('Sorting Repos...');
  //   setTopRepos(sorted);
  // };

  // const sortTypes = ['stars', 'forks', 'size'];

  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // const changeRepoSort = () => {
  //   setSortType(sortType);
  //   toggleDropdown();
  // };

  // useEffect(() => {
  //   getTopRepos();
  // }, []);

  const topRepos = [
    {
      name: 'Algorithms',
      language: 'Python',
      size: 38,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'budgety',
      language: 'JavaScript',
      size: 1230,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'Computer-Architecture',
      language: 'Python',
      size: 53,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'covid-19',
      language: 'JavaScript',
      size: 687,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'Data-Structures',
      language: 'Python',
      size: 375,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'github-profile',
      language: 'JavaScript',
      size: 881,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'Data-Structures',
      language: 'Python',
      size: 375,
      stargazers_count: 0,
      forks: 0,
    },
    {
      name: 'github-profile',
      language: 'JavaScript',
      size: 881,
      stargazers_count: 0,
      forks: 0,
    },
  ];

  console.log(topRepos);

  return (
    <div className='repo-container'>
      <h1>Top Repos</h1>
      <div className='repo-cards'>
        {topRepos.map((repos) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default TopRepos;
