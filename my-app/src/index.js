import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
// import Head1 from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import ChildNodeComp from './components/testStateAndPros/ChildNodeExample';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Head1/>
// <Head1/>
// <Head1/>
// <Head1/> */}
//   {/* </React.StrictMode>
// ); */}

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChildNodeComp>
  <h1>List element</h1>
  <h3>Heading element</h3>
  <p>Paragraph element</p>
  <span>Span element</span>
</ChildNodeComp>);