import 'babel-polyfill';
import './reset.scss';
import './global.scss';
import history from './history';
import HomeContainer from './containers/HomeContainer';
import { IndexRoute, Route, Router } from 'react-router';
import ProductHunt from './pages/ProductHunt';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchPageContainer from './containers/SearchPageContainer';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ProductHunt}>
        <IndexRoute component={HomeContainer} />
        <Route path="search" component={SearchPageContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
