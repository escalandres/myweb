import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Router from './components/Router';
import QRGenerator from './components/QRGenerator';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Router/> */}
    <QRGenerator/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
