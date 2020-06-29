import React from 'react';
import './App.css';
import UserData from './components/UserData';
import UserName from './components/UserName';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={UserName} />
        <Route exact path='/profile/:id' component={UserData} />
      </Switch>
    </div>
  );
}

export default App;
