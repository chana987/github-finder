import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

const app = (
    <GithubState>
      <AlertState>
            <Router>
                <App />
            </Router>
      </AlertState>
    </GithubState>
)

ReactDOM.render(app, document.getElementById('root'));
