import 'babel-polyfill';
import './reset.scss';
import './global.scss';
import ProductHuntContainer from './containers/ProductHuntContainer';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ProductHuntContainer />
  </Provider>,
  document.getElementById('content')
);
