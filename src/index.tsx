import './styles.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './App';

console.log(navigator.serviceWorker);

if(navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
  console.log('Registered');
}

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('root'));
