import React, { useState, useEffect } from 'react';
import TopRepos from './TopRepos';
import StarredRepos from './StarredRepos';

function RepoData(repoData) {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // console.log(repoData.repoData);

  const getTopRepos = (type) => {
    const LIMIT = 8;
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
  return (
    <div>
      <StarredRepos topRepos={topRepos} />
      <TopRepos topRepos={topRepos} />
    </div>
  );
}

export default RepoData;
