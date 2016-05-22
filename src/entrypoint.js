import 'babel-polyfill';
import './reset.scss';
import './global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import ProductHunt from './components/ProductHunt';
ReactDOM.render(<ProductHunt />, document.getElementById('content'));

// import NavSidebar from './components/NavSidebar';
// ReactDOM.render(<NavSidebar />, document.getElementById('content'));
