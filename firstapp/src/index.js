import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    <Employees/>
  </React.StrictMode>
);
