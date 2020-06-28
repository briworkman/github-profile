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
      <h1>TOP REPOS</h1>
    </div>
  );
}

export default TopRepos;
