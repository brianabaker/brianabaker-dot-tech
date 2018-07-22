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


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));
