import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieProvider } from './MovieProvider';


ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
