import './App.css';
import React  from "react";
// import Navbar from './subcomponents/Navbar.jsx';
// import Main from './subcomponents/Main';
// import Footer from './subcomponents/Footer';
// import TestView1 from '../viewEncapsulation/TestView1';
import Client1 from "./testStateAndPros/Client1";

function App() { //functional component
  return(
    // <h1>i am in app.js file</h1>/* this is jsx */
    //babel converts our jsx into this kind of code
    // React.createElement("h1", {className:"col rounded",id:"myid"}, "i am in App.js file")
  // <React.Fragment>
  <>
  {/* <Navbar/>
  <Main/>
  <Footer/> */}
  {/* <TestView1/> */}
  {/* <h1 className='myStyle1'>Hii i am in App.js</h1> */}
  <Client1/>
  </>
  // </React.Fragment>
  );
}

// JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls.
// These two examples are identical:

// const element1 = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// const element2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// // Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.


export default App;