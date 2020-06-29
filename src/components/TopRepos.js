import React, { useEffect, useState } from 'react';

function TopRepos(repoData) {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // console.log(repoData.repoData);

  const getTopRepos = (type) => {
    const LIMIT = 6;
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };

    const sortProperty = map[type];
    const sorted = repoData.repoData
      ? repoData.repoData
          .filter((repo) => !repo.fork)
          .sort((a, b) => b[sortProperty] - a[sortProperty])
          .slice(0, LIMIT)
      : console.log('Sorting Repos...');
    setTopRepos(sorted);
  };

  const sortTypes = ['stars', 'forks', 'size'];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = () => {
    setSortType(sortType);
    toggleDropdown();
  };

  useEffect(() => {
    getTopRepos();
  }, []);

  console.log(topRepos);

  return (
    <div>
      {topRepos.map((repos) => {
        return (
          <div>
            <h1>{repos.name}</h1>
            <h3>{repos.language}</h3>
            <h3>{repos.size}</h3>
            <h3>{repos.stargazers_count}</h3>
            <h3>{repos.forks}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TopRepos;
