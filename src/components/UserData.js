import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import GhPolyglot from 'gh-polyglot';
import axios from 'axios';

function UserData(props) {
  let username = props.location.state.username;
  const [user, setUser] = useState({});
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    // Gets language data
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
      }
      setLangData(stats);
    });
    // Gets repo data
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

    // Gets user info
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [username]);

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
