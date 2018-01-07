import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../containers/App';
const packageInfo = require('../../../package.json');

// pages
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import About from '../pages/About';

const routes = (
  <Switch>
    <Route
      exact
      path={`/${packageInfo.name}`}
      render={() => (
        <App>
          <Home />
        </App>
      )}
    />
    <Route
      exact
      path={`/${packageInfo.name}/home`}
      render={() => (
        <App>
          <Home />
        </App>
      )}
    />
    <Route
      exact
      path={`/${packageInfo.name}/about`}
      render={() => (
        <App>
          <About />
        </App>
      )}
    />
    <Route
      render={() => (
        <App>
          <NotFound />
        </App>
      )}
    />
  </Switch>
);

export default routes;
