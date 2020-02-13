import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

const App = () => (
  <div className='App'>
    <Navbar />
    <div className="container">
      <Alert />
      <Switch>
        <Route exact path='/' render={() => (
          <Fragment>
            <Search />
            <Users />
          </Fragment>
        )} />
        <Route exact path='/about' component={About} />
        <Route exact
          path='/user/:login'
          component={User} />
      </Switch>
    </div>
  </div>
)

export default App;
