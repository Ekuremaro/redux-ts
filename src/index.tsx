import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App children={'children'} />
  </React.StrictMode>,
  document.getElementById('root')
);
