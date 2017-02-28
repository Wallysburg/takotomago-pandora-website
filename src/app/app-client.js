import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';

window.onload = () => {
  ReactDOM.render(<AppRouter/>, document.getElementById('main'));
};
