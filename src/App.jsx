import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const loginUrl = 'https://dev.brms.wisc.edu/login';
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/login" render={() => <Redirect to={loginUrl} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
