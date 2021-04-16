import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './App';

import favicon from './assets/favicon.ico';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={favicon} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
