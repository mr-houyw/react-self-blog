import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './mock/index';
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)


if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
