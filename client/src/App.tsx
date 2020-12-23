import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Profile from './components/Profile';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <ProtectedRoute path='/profile' component={Profile} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
