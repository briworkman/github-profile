import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import UserName from './components/UserName';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={UserName} />
        <Route exact path='/user/:id' component={UserInfo} />
      </Switch>
    </div>
  );
}

export default App;
