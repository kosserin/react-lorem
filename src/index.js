import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoremContext from './store/lorem-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoremContext>
    <App />
  </LoremContext>
);
