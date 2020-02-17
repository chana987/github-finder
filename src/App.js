import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

const App = () => (
  <div className='App'>
    <Navbar />
    <div className="container">
      <Alert />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/user/:login' component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App;
