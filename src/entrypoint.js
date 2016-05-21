import 'babel-polyfill';
import './reset.scss';
import './global.scss';
import ProductHunt from './components/ProductHunt';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<ProductHunt />, document.getElementById('content'));
