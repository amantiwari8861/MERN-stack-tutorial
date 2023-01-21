import React from 'react';
import ReactDOM from 'react-dom/client';
import Employees from './forms/EmployeesComp';
import Header from './Head/Header';
import Login from './forms/Login';
// import Employees from './hooks/Employee';
// import { ErrorHandler, Life1 } from './classCompLifeCycle/Life1';
// import UseEffectWithoutDependency from './hooks/useEffectWithoutDependency';
// import UseStateDemo from './hooks/useState';
// import './index.css';
// // import App from './components/App';
// // import Head1 from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
// import ChildNodeComp from './components/testStateAndPros/ChildNodeExample';
// import Life1 from './classCompLifeCycle/Life1';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Head/Home';
import AboutUs from './Head/AboutUs';
import ContactUs from './Head/ContactUs';
import Header2 from './Header2';
import NotFound from './Head/NotFound';
import LoginForm from './Head/LoginForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Head1/>
// <Head1/>
// <Head1/>
// <Head1/> */}
//   {/* </React.StrictMode>
// ); */}

// let root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ChildNodeComp>
//   <h1>List element</h1>
//   <h3>Heading element</h3>
//   <p>Paragraph element</p>
//   <span>Span element</span>
// </ChildNodeComp>);

root.render(

  // <ErrorHandler>
  // <Life1/>
  // </ErrorHandler>
  // <UseStateDemo></UseStateDemo>
  // <Employees/>
  // <UseEffectWithoutDependency/>
  // <Login/>
  <>
    {/* <Header/>
  <Employees/> */}
    {/* <Header2/> */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router> */}
    {/* <Header2/> */}
    <Router>
      <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/home/:name" element={<Home/>} />
      </Routes>
    </Router>
  </>
);
// setTimeout(() => {
//   root.unmount();
// }, 10000);

//old version (react 17)
// ReactDOM.render(<Life1/>,document.getElementById("root"));
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode( document.getElementById('root') );
//    }, 15000);