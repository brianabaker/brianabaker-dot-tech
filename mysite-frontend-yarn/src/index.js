// react needs
import React from 'react';
import ReactDOM from 'react-dom';

// root app component
import App from './App';

// css files
import './index.css';

// react-router
import { Route, Switch, BrowserRouter } from "react-router-dom";

// LINKS
import Resume from './Resume'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/resume' component={Resume}/>
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
