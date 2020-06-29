import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import GhPolyglot from 'gh-polyglot';
import axios from 'axios';

function UserData(props) {
  let username = props.location.state.username;
  //   let username = 'briworkman';
  const [user, setUser] = useState({});
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
      }
      setLangData(stats);
    });
  };

  const getRepoData = () => {
    axios
      .get(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        response.data
          ? setRepoData(response.data)
          : console.log('loading repos');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getLangData();
    getRepoData();

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   var langData = [
  //     { label: 'Python', value: 11, color: '#3572A5' },
  //     { label: 'JavaScript', value: 10, color: '#f1e05a' },
  //     { label: 'Others', value: 4, color: '#ccc' },
  //     { label: 'HTML', value: 1, color: '#e34c26' },
  //     { label: 'CSS', value: 1, color: '#563d7c' },
  //   ];

  //   var user = {
  //     avatar_url:
  //       'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80',
  //     name: 'Brianna Workman',
  //     login: `${username}`,
  //     location: 'Auburn Hills, MI',
  //     created_at: '2019-06-13T19:23:02Z',
  //     public_repos: '108',
  //     followers: '19',
  //     following: '25',
  //   };

  var COLORS = langData
    ? langData.map((colors) => {
        return colors.color;
      })
    : null;

  props = { repoData, langData, COLORS, user };
  return (
    <div>
      <UserInfo props={props} />
    </div>
  );
}

export default UserData;
