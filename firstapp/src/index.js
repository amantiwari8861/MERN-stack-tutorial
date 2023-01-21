import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import App from './App.jsx';
import { BrowserRouter} from 'react-router-dom';
import App2 from './Routes/App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <App2/>
    </BrowserRouter>
  </React.StrictMode>
);
